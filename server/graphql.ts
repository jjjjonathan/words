import { ApolloServer, gql } from 'apollo-server-lambda';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers/user';

// TODO fix this hacked-together mess

const typeDefs = gql`
  scalar Date

  type User {
    id: Int!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    passwordHash: String!
    userSince: Date!
    location: String
  }

  type Query {
    user(username: String!): User
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({ schema });

export const graphqlHandler = server.createHandler();
