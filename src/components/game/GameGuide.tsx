"use client";

import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline";
import { Box, Button, Card, Collapsible, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { GiHoneypot, GiNoseFront, GiTrophy } from "react-icons/gi";
import { IoPawSharp } from "react-icons/io5";
import { GameFullGuide } from "./GameFullGuide";

export function GameGuide() {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Card.Root>
      <Collapsible.Root
        open={!collapsed}
        onOpenChange={() => setCollapsed((prevState) => !prevState)}
      >
        <Card.Header>
          <Collapsible.Trigger asChild>
            <Button variant="ghost" gap={2}>
              <Heading>🐻🍯 BoopTheSnoot: A Beary Sweet Adventure</Heading>
              <Box
                transform={collapsed ? "rotate(0deg)" : "rotate(180deg)"}
                transition="transform 0.2s ease-in-out"
              >
                <FaArrowDown />
              </Box>
            </Button>
          </Collapsible.Trigger>
        </Card.Header>
        <Card.Body>
          <Collapsible.Content>
            <TimelineRoot maxW="400px">
              <TimelineItem>
                <TimelineConnector>
                  <IoPawSharp />
                </TimelineConnector>
                <TimelineContent>
                  <TimelineTitle>Step 1: Stash Your $SIP</TimelineTitle>
                  <TimelineDescription>
                    {`Chuck your $SIP into the honey pot! More $SIP means you're a bigger, comfier bera in the Bera Cave!`}
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineConnector>
                  <GiHoneypot />
                </TimelineConnector>
                <TimelineContent>
                  <TimelineTitle>
                    Step 2: Claim Your Liquid Gold JUGs
                  </TimelineTitle>
                  <TimelineDescription>
                    Every forest tick (block), your JUGs fill up with a mix of
                    $SIP and $HONEY!
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineConnector>
                  <GiNoseFront />
                </TimelineConnector>
                <TimelineContent>
                  <TimelineTitle>Step 3: Boop That Snoot!</TimelineTitle>
                  <TimelineDescription>
                    Decide to grow bigger or shrink down. Big bera or small
                    bera? Lazy lounger or honey hustler? You decide!
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineConnector>
                  <GiTrophy />
                </TimelineConnector>
                <TimelineContent>
                  <TimelineTitle>Step 4: Eye on the Honey Forest</TimelineTitle>
                  <TimelineDescription>
                    Check out other beras and their ranks. Can you outmaneuver
                    them for more honey?
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            </TimelineRoot>
          </Collapsible.Content>
        </Card.Body>
        {!collapsed && (
          <Card.Footer>
            <GameFullGuide />
          </Card.Footer>
        )}
      </Collapsible.Root>
    </Card.Root>
  );
}
