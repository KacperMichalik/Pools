import { ApolloClient, InMemoryCache } from "@apollo/client";

const uniswapSubgraph =
  "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3";

const client = new ApolloClient({
  uri: uniswapSubgraph,
  cache: new InMemoryCache(),
});

export default client;
