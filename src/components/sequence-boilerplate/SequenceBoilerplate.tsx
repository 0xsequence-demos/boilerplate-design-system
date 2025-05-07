import React from "react";
import { useSequenceBoilerplate } from "./useSequenceBoilerplate";
import { SequenceBoilerplateRoot } from "./SequenceBoilerplateRoot";
import {
  SequenceBoilerplateProvider,
  SequenceBoilerplateProps,
} from "./SequenceBoilerplateProvider";
import logo from "../../sequence-logo.png";

import { Svg } from "../svg/Svg";
import { useNativeBalance } from "../../helpers/useNativeBalance";
import { NetworkPopup } from "./network-popup";
import { AccountPopup } from "./account-popup";
import { formatEther } from "viem";

export function SequenceBoilerplate(props: SequenceBoilerplateProps) {
  const { children } = props;

  return (
    <SequenceBoilerplateProvider {...props}>
      <Content walletCallback={props?.walletCallback}>{children}</Content>
    </SequenceBoilerplateProvider>
  );
}

// Can create alterative content layout presets as needed
function Content({
  children,
  walletCallback,
}: {
  children: React.ReactNode;
  walletCallback: () => void;
}) {
  const { name, description, githubUrl, docsUrl, faucetUrl, wagmi, balance } =
    useSequenceBoilerplate();

  const { chain, address, isConnected } = wagmi.useAccount();
  const { chains, switchChainAsync } = wagmi.useSwitchChain();
  const { disconnect } = wagmi.useDisconnect();
  const nativeBalance = useNativeBalance({ chain, address });

  const formattedNativeBalance =
    nativeBalance && nativeBalance !== "-"
      ? formatEther(BigInt(nativeBalance))
      : "0";

  return (
    <div className="flex flex-1 flex-col">
      <header className="border-b border-white/10 bg-grey-950/75 sticky top-0 z-1000 isolate min-h-[3rem] flex items-center px-4">
        <img
          src={logo}
          width="32"
          height="32"
          alt="Sequence Boilerplates"
          className="hidden sm:block"
        />
        <div className="flex gap-2 items-center w-full sm:w-auto sm:ml-auto mr-0">
          {isConnected ? (
            <>
              <NetworkPopup
                faucetUrl={faucetUrl}
                chain={chain}
                balance={balance || formattedNativeBalance}
                chains={chains}
                switchChainAsync={switchChainAsync}
              />
              <AccountPopup
                chain={chain}
                address={address}
                disconnect={disconnect}
                walletCallback={walletCallback}
              />
            </>
          ) : null}
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[0.5rem] hover:bg-grey-800 border border-grey-800/50 hover:border-grey-700 bg-grey-900 text-grey-100 hover:text-grey-50 flex items-center justify-center  transition-all duration-300 ml-auto mr-0 sm:mx-auto shrink-0 size-9"
            >
              <Svg name="Github" className="size-5" />
            </a>
          ) : null}
        </div>
      </header>

      <SequenceBoilerplateRoot>
        <div className="flex flex-1 flex-col items-center justify-center gap-12 py-12 px-4">
          <div className="flex flex-col gap-4 items-center text-center">
            <Svg
              name="SequenceBoilerplateLogo"
              alt="Sequence Boilerplate"
              className="mb-2"
              width="192"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-24 sm:text-36 font-bold leading-tight">
                {name}
              </h1>
              <p className="text-14">{description}</p>
            </div>
          </div>
          <div className="max-w-(--breakpoint-md) mx-auto w-full">
            {children}
          </div>
        </div>

        <div className="text-14 font-medium text-center border-t border-white/10 bg-grey-950/75 py-4 ">
          <p>
            Want to learn more? Read the{"  "}
            <a
              href={docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white"
            >
              docs
            </a>
            !
          </p>
        </div>
      </SequenceBoilerplateRoot>
    </div>
  );
}
