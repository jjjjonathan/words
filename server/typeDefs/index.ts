import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

const typesArray = loadFilesSync(".", {
  extensions: ["graphql"],
  ignoreIndex: true,
});

export default mergeTypeDefs(typesArray);
