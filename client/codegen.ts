// eslint-disable-next-line import/no-extraneous-dependencies
import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "../server/typeDefs/*.graphql",
  documents: ["./**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

// # config:
// #   scalars:
// #     DateTime: Date
// #     EmailAddress: string
// #   mappers:
// #     User: ../db/queries/user#GQLUserModel
// #     Blog: ../db/queries/blog#GQLBlogModel
// #     Post: ../db/queries/post#GQLPostModel
// #   contextType: ../context#MyContext

export default config;
