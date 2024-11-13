import { ThemeProvider } from "@/components/providers/ThemeProvider";
import WagmiProvider from "@/components/providers/WagmiProvider";
import { APP_DESCRIPTION, APP_NAME, PROD_DOMAIN } from "@/config";
import type { Metadata } from "next";
import { headers } from "next/headers"; // added
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [`${PROD_DOMAIN}boop-the-snoot.png`],
  },
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const cookies = (await headers()).get("cookie");
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <WagmiProvider cookies={cookies}>{children}</WagmiProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
