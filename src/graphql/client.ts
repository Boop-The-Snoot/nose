import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  if (!process.env.GHOST_GRAPH_URL || !process.env.GHOST_GRAPH_KEY) {
    throw new Error("GHOST_GRAPH_URL and GHOST_GRAPH_KEY must be set");
  }

  return new ApolloClient({
    uri: process.env.GHOST_GRAPH_URL,
    cache: new InMemoryCache(),
    headers: {
      "X-GHOST-KEY": process.env.GHOST_GRAPH_KEY,
    },
  });
};

export default createApolloClient;