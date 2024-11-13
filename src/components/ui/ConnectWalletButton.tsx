"use client";

import { Button } from "@chakra-ui/react";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";

export function ConnectWalletButton() {
  const { open } = useAppKit();
  const { isConnected, address } = useAppKitAccount();

  return (
    <Button onClick={() => open({ view: isConnected ? "Account" : "Connect" })}>
      {isConnected
        ? `${address?.slice(0, 6)}...${address?.slice(-4)}`
        : "Connect Wallet"}
    </Button>
  );
}
