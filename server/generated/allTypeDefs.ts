export default `
type Blog implements Timestamps {
  id: Int!
  owner: User!
  title: String!
  subtitle: String
  posts: [Post]!
  slug: String!
  createdAt: Date!
  updatedAt: Date!
}

scalar Date

interface Timestamps {
  createdAt: Date!
  updatedAt: Date!
}

type Post implements Timestamps {
  id: Int!
  title: String!
  body: String!
  blog: Blog!
  author: User!
  slug: String!
  createdAt: Date!
  updatedAt: Date!
}

type User implements Timestamps {
  id: Int!
  firstName: String!
  lastName: String!
  username: String!
  email: String!
  passwordHash: String!
  location: String
  blogs: [Blog]!
  posts: [Post]!
  createdAt: Date!
  updatedAt: Date!
}

type Query {
  user(username: String!): User
}

schema {
  query: Query
}
`;