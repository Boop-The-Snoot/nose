import { ConnectWalletButton } from "@/components/ConnectWalletButton";
import { ActionDialog } from "@/components/game/ActionDialog";
import { GameGuide } from "@/components/game/GameGuide";
import { Leaderboard } from "@/components/game/Leaderboard";
import { ColorModeButton } from "@/components/ui/color-mode";
import { StatLabel, StatRoot, StatValueText } from "@/components/ui/stat";
import {
  Box,
  Card,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { GiHoneypot, GiMoneyStack, GiTrophy } from "react-icons/gi";

export default function Home() {
  return (
    <>
      <Box as="header" py={4} borderBottom="1px" borderColor="gray.200">
        <Container maxWidth="1280px">
          <Flex justify="space-between" align="center">
            <Heading size="md">Boop The Snoot</Heading>
            <Flex gap={4} align="center">
              <ColorModeButton />
              <ConnectWalletButton />
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Container
        maxWidth="1280px"
        pt={8}
        height="calc(100vh - 72px)"
        display="flex"
        justifyContent="center"
        gap={4}
        flexWrap="wrap"
      >
        <ActionDialog />
        <Flex flexDirection="column" gap={4} mt={4}>
          <Card.Root>
            <Card.Header>
              <Card.Title>Your Stats</Card.Title>
            </Card.Header>
            <Card.Body
              gap={2}
              flexDirection={{ base: "column", md: "row" }}
              alignItems="center"
              justifyContent="center"
            >
              <StatRoot maxW="200px" borderWidth="1px" p="4" rounded="md">
                <HStack justify="space-between">
                  <StatLabel>Rank</StatLabel>
                  <Icon color="fg.muted">
                    <GiTrophy />
                  </Icon>
                </HStack>
                <StatValueText>19</StatValueText>
              </StatRoot>
              <StatRoot maxW="200px" borderWidth="1px" p="4" rounded="md">
                <HStack justify="space-between">
                  <StatLabel>Balance</StatLabel>
                  <Icon color="fg.muted">
                    <GiMoneyStack />
                  </Icon>
                </HStack>
                <StatValueText>32.12 SIP</StatValueText>
              </StatRoot>
              <StatRoot maxW="200px" borderWidth="1px" p="4" rounded="md">
                <HStack justify="space-between">
                  <StatLabel>Rewards</StatLabel>
                  <Icon color="fg.muted">
                    <GiHoneypot />
                  </Icon>
                </HStack>
                <StatValueText>19.22 SIP</StatValueText>
              </StatRoot>
            </Card.Body>
          </Card.Root>
          <GameGuide />
        </Flex>
        <Leaderboard />
      </Container>
    </>
  );
}
