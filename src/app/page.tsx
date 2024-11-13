import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import { ConnectWalletButton } from '@/components/ui/ConnectWalletButton';

export default function Home() {
  return (
    <>
      <Box as="header" py={4} borderBottom="1px" borderColor="gray.200">
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading size="md">Boop The Snoot</Heading>
            <ConnectWalletButton />
          </Flex>
        </Container>
      </Box>
      <Container maxW="container.xl" pt={8}>
        <div>Dashboard</div>
      </Container>
    </>
  );
}
