import React from "react";
import { useSequenceBoilerplate } from "./useSequenceBoilerplate";
import { SequenceBoilerplateRoot } from "./SequenceBoilerplateRoot";
import {
  SequenceBoilerplateProvider,
  SequenceBoilerplateProps,
} from "./SequenceBoilerplateProvider";
import logo from "../../sequence-logo.png";
import useMeasure from "react-use-measure";
import { GradientAvatar } from "../gradient-avatar/GradientAvatar";
import { shortAddress } from "../../helpers/short-address";
import { useState } from "react";

import { motion } from "motion/react";
import { MenuPopover } from "../menu-popover/MenuPopover";
import { MenuPopoverButton } from "../menu-popover/MenuPopoverButton";
import { MenuInfo } from "../menu-popover/MenuInfo";
import { Svg } from "../svg/Svg";
import { useNativeBalance } from "../../helpers/useNativeBalance";
import { Chain } from "viem";

export function SequenceBoilerplate(props: SequenceBoilerplateProps) {
  const { children } = props;

  return (
    <SequenceBoilerplateProvider {...props}>
      <Content>{children}</Content>
    </SequenceBoilerplateProvider>
  );
}

// Can create alterative content layout presets as needed
function Content({ children }: { children: React.ReactNode }) {
  const { name, description, githubUrl, docsUrl, faucetUrl, wagmi, balance } =
    useSequenceBoilerplate();

  const { chain, address, isConnected } = wagmi.useAccount();
  const { chains, switchChainAsync } = wagmi.useSwitchChain();
  const { disconnect } = wagmi.useDisconnect();
  const nativeBalance = useNativeBalance({ chain, address });

  return (
    <div className="flex flex-1 flex-col">
      <header className="border-b border-white/10 bg-grey-950/75 sticky top-0 z-[1000] isolate min-h-[3rem] flex items-center px-4">
        <img
          src={logo}
          width="32"
          height="32"
          alt="Sequence Boilerplates"
          className="hidden sm:block"
        />
        {isConnected ? (
          <div className="flex gap-2 items-center w-full sm:w-auto sm:ml-auto mr-0">
            <NetworkPopup
              faucetUrl={faucetUrl}
              chain={chain}
              balance={balance || nativeBalance}
              chains={chains}
              switchChainAsync={switchChainAsync}
            />
            <AccountPopup
              chain={chain}
              address={address}
              disconnect={disconnect}
            />
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[0.5rem] hover:bg-grey-800 border border-grey-800/50 hover:border-grey-700 bg-grey-900 text-grey-100 hover:text-grey-50 flex items-center justify-center  transition-all duration-300 ml-auto mr-0 sm:mx-auto flex-shrink-0 size-9"
              >
                <Svg name="Github" className="size-5" />
              </a>
            ) : null}
          </div>
        ) : null}
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
          <div className="max-w-screen-md mx-auto w-full">{children}</div>
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

const SEQUENCE_ASSETS_URL_PREFIX = "https://assets.sequence.info/";
const VERSION = 5;
const networkImageUrl = (
  chainId: number,
  size?: "small" | "medium" | "large",
) => {
  return (
    SEQUENCE_ASSETS_URL_PREFIX +
    `images/networks/${size}/${chainId}.webp?v${VERSION}`
  );
};

function NetworkPopup({
  faucetUrl,
  chains,
  switchChainAsync,
  chain,
  balance,
}: {
  faucetUrl?: string;
  switchChainAsync: any;
  chains: Chain[];
  chain: Chain;
  balance: string;
}) {
  const [isOpen, setOpen] = useState(false);

  async function handleChainChange(chainId: number) {
    await switchChainAsync({ chainId });
    setTimeout(() => setOpen(false), 200);
  }

  if (chains.length < 2 && !faucetUrl) {
    return (
      <MenuInfo>
        {chain ? (
          <img
            src={networkImageUrl(chain?.id, "small")}
            className="size-5"
            alt={chain?.name}
          />
        ) : null}
        <span>
          {balance}{" "}
          <span className="text-10 font-medium text-grey-100 my-auto">
            {chain?.nativeCurrency.symbol}
          </span>
        </span>
      </MenuInfo>
    );
  }

  return (
    <div className="relative">
      <MenuPopoverButton isOpen={isOpen} setOpen={setOpen}>
        {chain ? (
          <img
            src={networkImageUrl(chain?.id, "small")}
            className="size-5 rounded-full"
            alt={chain?.name}
          />
        ) : null}
        <span>
          {balance}{" "}
          <span className="text-10 font-medium text-grey-100 my-auto inline-block min-w-[4ex]">
            {chain?.nativeCurrency.symbol}
          </span>
        </span>
      </MenuPopoverButton>

      <MenuPopover isOpen={isOpen} setOpen={setOpen}>
        <div className="flex items-center gap-3 pl-4 pr-3 py-3 border-b border-grey-900 justify-between bg-gradient-to-b to-white/0 from-white/[1%] ">
          <span className="text-14 text-grey-100">Networks</span>
          {faucetUrl ? (
            <a
              href={faucetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-12 bg-grey-900 rounded-[0.5rem] px-2 py-1 border border-grey-800 hover:bg-grey-800 hover:border-grey-700 transition-colors duration-300 font-medium"
            >
              Add test currency
            </a>
          ) : null}
        </div>
        <div className="flex flex-col text-14 items-start p-1">
          {chains.map((item) => (
            <button
              key={item?.id}
              type="button"
              className="flex gap-2 items-center pl-2 pr-4 py-2 hover:bg-grey-900 border border-transparent hover:border-grey-800 transition-colors duration-300 w-full rounded-[8px]"
              onClick={() => handleChainChange(item?.id)}
            >
              <span className="size-4">
                {item?.id === chain?.id ? (
                  <Svg name="Checkmark" className="text-white size-4" />
                ) : null}
              </span>
              {item ? (
                <img
                  src={networkImageUrl(item?.id, "small")}
                  className="size-[18px] rounded-full"
                  alt={item?.name}
                />
              ) : null}
              <span>{item?.name}</span>
            </button>
          ))}
        </div>
      </MenuPopover>
    </div>
  );
}

function AccountPopup({ address, chain, disconnect }) {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // do nothing
    }
  };
  const [isOpen, setOpen] = useState(false);
  const [elementRef, bounds] = useMeasure();
  const blockExplorerUrl =
    chain?.blockExplorers?.default?.url + "/address/" + address;

  const [state, setState] = useState(false);

  const variants = {
    show: {
      x: 0,
    },
    hide: {
      x: -bounds.width,
    },
  };

  return (
    <div className="relative">
      <MenuPopoverButton isOpen={isOpen} setOpen={setOpen}>
        <GradientAvatar address={address as string} className="size-5" />
        {shortAddress(address)}
      </MenuPopoverButton>
      <MenuPopover isOpen={isOpen} setOpen={setOpen}>
        <div className="flex items-center gap-4 p-1 border-b border-grey-900">
          <GradientAvatar address={address as string} className="size-8 ml-3" />
          <motion.button
            type="button"
            onClick={() => {
              copyToClipboard(address as string);
            }}
            className="flex flex-col group px-3 py-2 hover:bg-grey-900 border border-transparent hover:border-grey-800 transition-colors duration-300 w-full rounded-[8px]"
            onHoverStart={() => setState(true)}
            onHoverEnd={() => setState(false)}
          >
            <motion.span className="text-12 text-grey-100 leading-snug text-start relative inline-block overflow-hidden">
              <motion.span
                className="inline-block overflow-hidden text-right"
                variants={variants}
                animate={state ? "show" : "hide"}
                initial="hide"
              >
                <span ref={elementRef}>Copy </span>
                <motion.span>Wallet Address</motion.span>
              </motion.span>
            </motion.span>
            <span className="text-14 inline-flex gap-1 items-center break-words">
              <span className="break-words">{address}</span>{" "}
              <Svg name="Copy" className="size-4 text-grey-200" />
            </span>
          </motion.button>
        </div>
        <div className="flex flex-col text-14 items-start p-1">
          <a
            href={blockExplorerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 items-center px-3 py-2 hover:bg-grey-900 border border-transparent hover:border-grey-800 transition-colors duration-300 w-full rounded-[8px]"
          >
            <span className="h-6 w-7 flex items-center justify-center border border-grey-800/50 rounded-[6px]">
              <Svg name="Wallet" className="text-white size-4" />
            </span>
            Open wallet
          </a>
          <button
            type="button"
            className="flex gap-3 items-center px-3 py-2 hover:bg-grey-900 border border-transparent hover:border-grey-800 transition-colors duration-300 w-full rounded-[8px]"
            onClick={() => disconnect()}
          >
            <span className="h-6 w-7 flex items-center justify-center border border-grey-800/50 rounded-[6px]">
              <Svg name="Signout" className="text-white size-4" />
            </span>
            Sign out
          </button>
        </div>
      </MenuPopover>
    </div>
  );
}
