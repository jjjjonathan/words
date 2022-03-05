import { ApolloServer } from 'apollo-server-lambda';
import typeDefs from './generated/all-type-defs';
import resolvers from './resolvers/user';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export const graphqlHandler = server.createHandler();
