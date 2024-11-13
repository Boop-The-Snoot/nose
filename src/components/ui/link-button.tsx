"use client";

import type { HTMLChakraProps, RecipeProps } from "@chakra-ui/react";
import { createRecipeContext } from "@chakra-ui/react";
import Link from "next/link";

const { withContext } = createRecipeContext({ key: "button" });

export const LinkButton = withContext<
  HTMLAnchorElement,
  HTMLChakraProps<typeof Link, RecipeProps<"button">>
>(Link);
