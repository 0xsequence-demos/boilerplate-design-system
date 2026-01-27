import { createContext } from "react";
import type { Address, Chain } from "viem";

export type SequenceBoilerplateContext = {
  name?: string;
  description?: string;
  useAuth?: boolean;
  githubUrl?: string;
  docsUrl?: string;
  faucetUrl?: string;
  wagmi?: {
    useAccount: () => {
      chain?: Chain;
      address?: Address;
      isConnected?: boolean;
    };
    useSwitchChain: () => {
      chains: Chain[];
      switchChainAsync: (args: { chainId: number }) => Promise<unknown>;
    };
    useDisconnect: () => {
      disconnect: () => void;
    };
  };
  balance?: string | false;
};

export const SequenceBoilerplateContext =
  createContext<SequenceBoilerplateContext | null>(null);
