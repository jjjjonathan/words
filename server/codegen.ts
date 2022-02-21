// Some imports are devDependencies. This file is only run in dev
/* eslint-disable import/no-extraneous-dependencies */

import * as fs from 'fs/promises';
import * as path from 'path';
import { loadFiles } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { print } from 'graphql';
import { Types as CodegenPluginTypes } from '@graphql-codegen/plugin-helpers/types';
import * as typescriptPlugin from '@graphql-codegen/typescript';
import * as typescriptResolversPlugin from '@graphql-codegen/typescript-resolvers';
import { codegen } from '@graphql-codegen/core';

// Set paths
const typeDefsDir = './type-defs';
const typeDefsOutputFile = './generated/all-type-defs.ts';
const resolverTypesOutputFile = './generated/resolver-types.ts';

async function generate() {
  console.log('Starting GraphQL code generation...');
  console.log(`Loading typeDefs from ${typeDefsDir}`);

  // Load and merge all typeDefs
  const typeDefsArray = await loadFiles(path.join(__dirname, typeDefsDir));
  const allTypeDefs = mergeTypeDefs(typeDefsArray);

  console.log('Compiling typeDefs...');

  // Output all typeDefs to TS file
  const printedTypeDefs = print(allTypeDefs);
  const typeDefsOutput = `export default \`\n${printedTypeDefs}\n\`;`;
  const absoluteTypeDefsOutputPath = path.join(__dirname, typeDefsOutputFile);
  await fs.writeFile(absoluteTypeDefsOutputPath, typeDefsOutput);

  console.log(`All typeDefs outputted to \n\t ${absoluteTypeDefsOutputPath}`);

  // This type necessary for multiple plugins to work.
  // Make sure each plugin is its own object in plugins array.
  const config: CodegenPluginTypes.GenerateOptions = {
    documents: [],
    config: {},
    // filename is used by a plugin internally. The 'typescript' plugin
    // returns the string output rather than writing to a file
    filename: resolverTypesOutputFile,
    schema: allTypeDefs,
    plugins: [
      {
        typescript: {},
      },
      {
        typescriptResolvers: { useIndexSignature: true },
      },
      // TODO add 'typescript-react-apollo', 'typescript-operations',
      // and maybe 'introspection' plugins for frontend gen.
      // Write script to copy files to client folder.
    ],
    pluginMap: {
      typescript: typescriptPlugin,
      typescriptResolvers: typescriptResolversPlugin,
    },
  };

  console.log('Generating TypeScript definitions...');

  // Output TS defs to string and write to file
  const output = await codegen(config);
  const absoluteResolverTypesOutputPath = path.join(
    __dirname,
    resolverTypesOutputFile,
  );
  await fs.writeFile(absoluteResolverTypesOutputPath, output);

  console.log(
    `TypeScript definitions for resolvers outputted to \n\t ${absoluteResolverTypesOutputPath}`,
  );
  console.log('Code generation complete!');
}

generate();
