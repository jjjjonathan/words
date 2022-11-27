import { ApolloServer } from "apollo-server-lambda";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import context from "./context";

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

export const graphqlHandler = server.createHandler();
