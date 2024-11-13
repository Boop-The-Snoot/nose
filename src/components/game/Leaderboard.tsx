import createApolloClient from "@/graphql/client";
import { GetPlayers } from "@/graphql/queries";
import { Table } from "@chakra-ui/react";

export async function Leaderboard() {
  const client = createApolloClient();
  const { data } = await client.query({ query: GetPlayers });

  return (
    <Table.Root size="sm" interactive>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Rank</Table.ColumnHeader>
          <Table.ColumnHeader>Address</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Balance</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Total Rewards</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">
            Predicted Rewards
          </Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.players.items.length === 0 ? (
          <Table.Row>
            <Table.Cell colSpan={5} textAlign="center">
              No players found
            </Table.Cell>
          </Table.Row>
        ) : (
          data.players.items.map((player, i) => (
            <Table.Row key={player.id}>
              <Table.Cell>{i + 1}</Table.Cell>
              <Table.Cell>{player.id}</Table.Cell>
              <Table.Cell textAlign="end">{player.balance}</Table.Cell>
              <Table.Cell textAlign="end">
                {player.totalCumulativeRewards}
              </Table.Cell>
              <Table.Cell textAlign="end">
                {player.totalPendingRewards}
              </Table.Cell>
            </Table.Row>
          ))
        )}
      </Table.Body>
    </Table.Root>
  );
}
