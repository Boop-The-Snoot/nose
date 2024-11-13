"use client";

import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { NumberInputField, NumberInputRoot } from "../ui/number-input";
import { toaster } from "../ui/toaster";

export function ActionDialog() {
  const [amount, setAmount] = useState("");

  const handleDeposit = () => {
    // @todo: handle actual deposit
    setAmount("");
    toaster.success({
      title: "Boop! Deposit successful :)",
      description: `You have deposited ${amount} SIP`,
    });
  };

  const handleWithdraw = () => {
    // @todo: handle actual withdraw
    setAmount("");
    toaster.success({
      title: "Boop! Withdraw successful :)",
      description: "You have withdrawn 100.00 SIP",
    });
  };

  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          maxWidth="600px"
          maxHeight="600px"
          width="100%"
          height="100%"
        >
          <Image
            src="/assets/boop-the-snoot.png"
            alt="Boop The Snoot"
            width={600}
            height={600}
          />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Deposit or Withdraw</DialogTitle>
          <DialogDescription>
            Deposit 100.00 SIP to climb to rank 9, increasing your rewards by
            10.55% Current earnings: 500.00 SIP per 10 minutes
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <NumberInputRoot
            value={amount}
            onValueChange={(e) => setAmount(e.value)}
          >
            <NumberInputField />
          </NumberInputRoot>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline" onClick={handleWithdraw}>
              Withdraw
            </Button>
          </DialogActionTrigger>
          <DialogActionTrigger asChild>
            <Button variant="solid" onClick={handleDeposit}>
              Deposit
            </Button>
          </DialogActionTrigger>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}
