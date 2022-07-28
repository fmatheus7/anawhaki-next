import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-eu-central-1.hygraph.com/v2/cl5ks0yhx35db01uo14docbq9/master",
  cache: new InMemoryCache(),
});

export default client;
