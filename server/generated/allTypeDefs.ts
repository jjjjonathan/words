export default `
type Blog implements Timestamps {
  id: Int!
  owner: User!
  title: String!
  subtitle: String
  posts: [Post]!
  slug: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

scalar DateTime

interface Timestamps {
  createdAt: DateTime!
  updatedAt: DateTime!
}

type Post implements Timestamps {
  id: Int!
  title: String!
  body: String!
  blog: Blog!
  author: User!
  slug: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type User implements Timestamps {
  id: Int!
  firstName: String!
  lastName: String!
  username: String!
  email: String!
  location: String
  bio: String
  blogs: [Blog]!
  posts: [Post]!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type Query {
  user(username: String!): User
}

schema {
  query: Query
}
`;