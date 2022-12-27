// eslint-disable-next-line import/no-extraneous-dependencies
import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "../server/typeDefs/*.graphql",
  documents: ["./**/*.tsx"],
  ignoreNoDocuments: true,
  generates: {
    "./generated/": {
      preset: "client",
      plugins: [],
    },
  },
  config: {
    scalars: {
      DateTime: "string",
      EmailAddress: "string",
    },
  },
};

export default config;
