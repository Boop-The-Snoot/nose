"use client";

import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Prose } from "@/components/ui/prose";
import { Heading, Text, VStack } from "@chakra-ui/react";
import { FiBook } from "react-icons/fi";

export function GameFullGuide() {
  const GuideContent = () => (
    <Prose>
      <VStack gap={6} align="stretch">
        <Heading as="h2" size="lg">
          🐻🍯 BoopTheSnoot: A Beary Sweet Adventure for Beras of All Sizes!
          🐾🌟
        </Heading>

        <Text>
          Welcome to BoopTheSnoot, where big beras lounge and little beras
          hustle! Get ready to boop, snoot, and fill your belly with sweet,
          sweet JUGs of goodness! 🍯✨
        </Text>

        <AccordionRoot multiple>
          <AccordionItem value="step1">
            <AccordionItemTrigger>
              🐾 Step 1: Stash Your $SIP
            </AccordionItemTrigger>
            <AccordionItemContent>
              <VStack align="stretch" gap={3}>
                <Text>
                  <strong>{`What's`} the Buzz</strong>: Chuck your $SIP into the
                  honey pot! More $SIP means {`you're`} a bigger, comfier bera
                  in the Bera Cave! 🐻⬆️
                </Text>
                <Text>
                  <strong>Why {`It's`} Grrreat</strong>: Bigger beras get cozy
                  spots, while smaller beras can scamper for big rewards! 🏆🍯
                </Text>
              </VStack>
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem value="step2">
            <AccordionItemTrigger>
              🍯 Step 2: Claim Your Liquid Gold JUGs
            </AccordionItemTrigger>
            <AccordionItemContent>
              <VStack align="stretch" gap={3}>
                <Text>
                  <strong>Keep Your Peepers Open</strong>: Your bera size (rank)
                  and JUG stash are right up top, clear as a salmon in a shallow
                  stream!
                </Text>
                <Text>
                  <strong>Grab That JUG</strong>: Every forest tick ({`that's`}{" "}
                  a block for you smart beras), your JUGs fill up with a mix of
                  $SIP and $HONEY! 🍯💰
                </Text>
              </VStack>
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem value="jugTokens">
            <AccordionItemTrigger>
              🐻 JUG Tokens: Honey Pots for Beras Big and Small
            </AccordionItemTrigger>
            <AccordionItemContent>
              <VStack align="stretch" gap={3}>
                <Text>{`Listen up, you clever cubs! JUG tokens are where it's at - they're sweeter than stolen picnic baskets! 🐻🍯`}</Text>
                <ul>
                  <li>
                    <strong>JUG Juice</strong>: Each JUG is like a magical honey
                    pot, slowly filling with $SIP and $HONEY. 🌟
                  </li>
                  <li>
                    <strong>Honey Fermentation</strong>:{" "}
                    {`The longer you let your JUGs sit, the more $HONEY they'll have compared to $SIP. It's like aging fine salmon! 🍯🐟`}
                  </li>
                  <li>
                    <strong>Impatient Cub Syndrome</strong>:{" "}
                    {`Grab your JUG too early, and you'll miss out on the good stuff. But here's the kicker - your leftovers make other beras' JUGs fill faster! 🐻⏳`}
                  </li>
                  <li>
                    <strong>Patient Bera Perks</strong>:{" "}
                    {`Wait it out, and you might find your JUGs filling up faster than a bera's belly at a buffet! 🌳🍯`}
                  </li>
                </ul>
              </VStack>
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem value="step3">
            <AccordionItemTrigger>
              👉🐽 Step 3: Boop That Snoot!
            </AccordionItemTrigger>
            <AccordionItemContent>
              <VStack align="stretch" gap={3}>
                <Text>
                  <strong>Snoot Booping Choices</strong>:
                </Text>
                <ul>
                  <li>
                    <strong>Grow Bigger</strong>: How much $SIP you need to be a
                    bigger, lazier bera.
                  </li>
                  <li>
                    <strong>Shrink Down</strong>: How much you can take out to
                    become a smaller, zippier bera.
                  </li>
                </ul>
                <Text>
                  <strong>Bera Strategy</strong>: Big bera or small bera? Lazy
                  lounger or honey hustler? You decide! 🐻🔄
                </Text>
              </VStack>
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem value="step4">
            <AccordionItemTrigger>
              🏆 Step 4: Eye on the Honey Forest
            </AccordionItemTrigger>
            <AccordionItemContent>
              <VStack align="stretch" gap={3}>
                <Text>
                  <strong>Bera Watching</strong>: Check out the beras of all
                  sizes showing off their ranks and JUG collections.{" "}
                  {`It's like a forest-wide bera parade! 🍯🐾`}
                </Text>
                <Text>
                  <strong>Your Bera Mission</strong>: Keep your snout twitching!
                  Can you outmaneuver other beras? Maybe bulk up for a comfy
                  spot or slim down for quick honey grabs!
                </Text>
              </VStack>
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem value="tricks">
            <AccordionItemTrigger>
              🧠 Clever Bera Tricks for All Sizes
            </AccordionItemTrigger>
            <AccordionItemContent>
              <VStack align="stretch" gap={3}>
                <ol>
                  <li>
                    <strong>Size Matters</strong>:
                    <ul>
                      <li>
                        <strong>Big Beras</strong>:{" "}
                        {`You're comfy and your rank doesn't change much. Perfect for lazy beras who like steady honey. 🐻💤`}
                      </li>
                      <li>
                        <strong>Small Beras</strong>:{" "}
                        {`You gotta hustle! Your rank changes fast, but oh boy, can you score big if you're clever! 🏃‍♂️🍯`}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Watch the Forest Rhythm</strong>: Your JUGs are
                    always filling, no matter your size! ⏳🐻
                  </li>
                  <li>
                    <strong>Bera Flexibility</strong>:{" "}
                    {`Sometimes it's good to be big, sometimes small. Switch it up based on the forest vibe! 🔄🌳`}
                  </li>
                  <li>
                    <strong>Sniff Out Opportunities</strong>: Big or small,
                    always be on the lookout for chances to improve your honey
                    situation! 🐽👀
                  </li>
                  <li>
                    <strong>JUG Juggling</strong>: Timing is everything!{" "}
                    {`Don't let your JUGs overflow, but don't grab 'em too soon either. It's a beary delicate dance! 🤹‍♂️🍯`}
                  </li>
                </ol>
              </VStack>
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem value="advanced">
            <AccordionItemTrigger>
              🎓 Advanced Bera-nomics: The Honey Hierarchy and Winning Formula
              🐻🎯
            </AccordionItemTrigger>
            <AccordionItemContent>
              <VStack align="stretch" gap={3}>
                <Text>
                  Alright, you big-brained beras!{" "}
                  {`Let's dive into the forest's secret honey distribution system. Get ready for some beary clever math! 🍯🧮`}
                </Text>
                <Heading as="h4" size="md">
                  🌟 The Great Honey Distribution Formula
                </Heading>
                <ol>
                  <li>
                    <strong>Magic Forest Numbers</strong>:
                    <ul>
                      <li>
                        The forest uses a special{" "}
                        <strong>shortenBlockNumber</strong> spell on each tick.{" "}
                        {`It's like shrinking a big salmon to bera-bite size! 🎩🐟`}
                      </li>
                      <li>
                        {`How it works:`} We keep chopping off the first digit
                        of the block number until{" "}
                        {`it's smaller than the number of beras playing (or one less than the max number of beras allowed in the game).`}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Who Gets the Honey Pot?</strong> 🐻🥇
                    <ul>
                      <li>
                        <strong>Top Bera (Rank 1)</strong>:{" "}
                        {`You win on every odd-numbered forest tick (1, 3, 5, 7, etc.). You're the big bera, but you only get honey on odd days.`}
                      </li>
                      <li>
                        <strong>Other Beras (Rank 2 and below)</strong>: You get
                        honey if either of these is true:
                        <ul>
                          <li>
                            The magic forest number divides evenly into your
                            rank (magic number % your rank == 0)
                          </li>
                          <li>
                            Your rank divides evenly into the magic forest
                            number (your rank % magic number == 0)
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Bera Example</strong>: 🐻🎯{" "}
                    {`Let's say the original block number is 123456, and we have 100 beras playing.`}
                    <ul>
                      <li>
                        First, we shorten 123456:
                        <ul>
                          <li>23456 (still too big)</li>
                          <li>3456 (still too big)</li>
                          <li>456 (still too big)</li>
                          <li>56 (just right! {`It's less than 100`})</li>
                        </ul>
                      </li>
                      <li>So our magic forest number is 56.</li>
                      <li>
                        Now, {`let's see who wins:`}
                        <ul>
                          <li>
                            <strong>Top Bera (Rank 1)</strong>{" "}
                            {`doesn't get honey (56 is an even day).`}
                          </li>
                          <li>
                            <strong>Second Bera (Rank 2)</strong> gets honey
                            because 56 % 2 == 0 (56 divides evenly by 2).
                          </li>
                          <li>
                            <strong>Fourth Bera (Rank 4)</strong> gets honey
                            because 56 % 4 == 0 (56 divides evenly by 4).
                          </li>
                          <li>
                            <strong>Seventh Bera (Rank 7)</strong> gets honey
                            because 56 % 7 == 0 (56 divides evenly by 7).
                          </li>
                          <li>
                            <strong>Eighth Bera (Rank 8)</strong> gets honey
                            because 56 % 8 == 0 (56 divides evenly by 8).
                          </li>
                          <li>
                            <strong>Fourteenth Bera (Rank 14)</strong> gets
                            honey because 56 % 14 == 0 (56 divides evenly by
                            14).
                          </li>
                          <li>
                            <strong>Twenty-Eighth Bera (Rank 28)</strong> gets
                            honey because 56 % 28 == 0 (56 divides evenly by
                            28).
                          </li>
                          <li>
                            <strong>Fifty-Sixth Bera (Rank 56)</strong> gets
                            honey because 56 % 56 == 0 (56 divides evenly by
                            56).
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <Text>
                      Ranks 2, 4, 7, 8, 14, 28, and 56 all win and share the
                      honey pot. {`It's`} a bera picnic! 🍯🐾
                    </Text>
                  </li>
                  <li>
                    <strong>Bera Rank Balance</strong>:
                    <ul>
                      <li>
                        <strong>Top Bera</strong> only wins on odd days, making
                        the honey rarer but oh so sweet.
                      </li>
                      <li>
                        <strong>Higher-up Beras</strong> (like Rank 2, 4, 8) win
                        more often, but they might have to share their berries
                        with other winners.
                      </li>
                      <li>
                        <strong>Prime Number Ranked Beras</strong> (like Rank 3,
                        5, 7, 11) can win big when the magic number matches, but
                        it happens less often.
                      </li>
                      <li>
                        <strong>Lower Ranks</strong> can win frequently,
                        especially if {`they're`} factors of many numbers, but{" "}
                        {`they're`} often at a bigger picnic with more sharing.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Bera-Smart Moves</strong>: 🧠🐻
                    <ul>
                      <li>
                        Pick your rank based on how often you want honey and how
                        much {`you're`} willing to share.
                      </li>
                      <li>
                        Want frequent honey but {`don't mind sharing?`} Aim for
                        ranks with lots of factors!
                      </li>
                      <li>
                        Want big, rare honey hauls? Prime number ranks might be
                        your jam!
                      </li>
                      <li>
                        Top Beras, keep your eyes on those odd-numbered days –{" "}
                        {`that's`} when your honey flows! 🌟
                      </li>
                    </ul>
                  </li>
                </ol>
              </VStack>
            </AccordionItemContent>
          </AccordionItem>
        </AccordionRoot>

        <Text mt={4}>
          Remember, clever beras, this system keeps the forest fair and
          exciting! Whether {`you're`} a big, lazy bera or a small, zippy one,{" "}
          {`there's`} always a chance to win that sweet, sweet honey! Now go out
          there and boop some snoots! 🐾🍯🐻
        </Text>
      </VStack>
    </Prose>
  );

  return (
    <DrawerRoot size={{ base: "full", lg: "lg" }}>
      <DrawerTrigger>
        <Button variant="ghost" size="md" asChild>
          <span className="flex items-center gap-2">
            <FiBook />
            Complete Game Guide
          </span>
        </Button>
      </DrawerTrigger>

      <DrawerBackdrop />
      <DrawerContent>
        <DrawerCloseTrigger />
        <DrawerHeader borderBottomWidth="1px">Complete Game Guide</DrawerHeader>
        <DrawerBody>
          <GuideContent />
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
}
