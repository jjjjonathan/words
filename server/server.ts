import { ApolloServer } from "@apollo/server";
import { DocumentNode } from "graphql";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import context, { MyContext } from "./context";

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
});

export const executeOperation = <Res>(query: string | DocumentNode) =>
  server.executeOperation<Res>({ query }, { contextValue: context });

export default server;
