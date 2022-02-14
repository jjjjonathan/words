import { gql } from 'apollo-server-lambda';

export default gql`
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
