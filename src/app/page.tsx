import { ActionDialog } from "@/components/game/ActionDialog";
import { ColorModeButton } from "@/components/ui/color-mode";
import { ConnectWalletButton } from "@/components/ui/ConnectWalletButton";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";

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
        flexDirection="column"
        alignItems="center"
      >
        <ActionDialog />
      </Container>
    </>
  );
}
