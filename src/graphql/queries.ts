import { gql } from "@apollo/client";

export const GetPlayers = gql`
  query GetPlayers {
    players(orderBy: "totalCumulativeRewards", orderDirection: "desc") {
      items {
        id
        totalCumulativeRewards
        totalPendingRewards
      }
    }
  }
`;
