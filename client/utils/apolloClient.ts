import { ApolloClient, InMemoryCache } from "@apollo/client";

const { GRAPHQL_URL } = process.env;

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

console.log("gql", GRAPHQL_URL);

export default client;
