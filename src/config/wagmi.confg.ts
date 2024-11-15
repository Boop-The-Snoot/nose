import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { berachainTestnetbArtio } from "@reown/appkit/networks";
import { cookieStorage, createStorage } from "@wagmi/core";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
  throw new Error("Project ID is not defined");
}

export const networks = [berachainTestnetbArtio];

// Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
