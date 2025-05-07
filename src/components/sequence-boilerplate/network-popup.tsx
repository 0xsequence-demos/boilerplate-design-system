import { useState } from "react";

import { MenuPopover } from "../menu-popover/MenuPopover";
import { MenuPopoverButton } from "../menu-popover/MenuPopoverButton";
import { MenuInfo } from "../menu-popover/MenuInfo";
import { Svg } from "../svg/Svg";
import { Chain } from "viem";
import { motion, AnimatePresence } from "motion/react";

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

export function NetworkPopup({
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
          {balance ? <span>{balance} </span> : <span>--</span>}
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
        <div className="grid grid-cols-1 grid-rows-1 min-w-[96px]">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={chain.id}
              className="inline-flex gap-2 shrink-0 col-start-1 row-start-1"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            >
              {chain ? (
                <img
                  src={networkImageUrl(chain?.id, "small")}
                  className="size-5 rounded-full"
                  width="20"
                  height="20"
                  alt={chain?.name}
                />
              ) : null}
              <span className="text-nowrap">
                {/* {balance ? <span>{balance} </span> : <span>--</span>}
                <span className="text-10 font-medium text-grey-100 my-auto inline-block min-w-[4ex]">
                  {chain?.nativeCurrency.symbol}
                </span> */}
                {chain?.name}
              </span>
            </motion.span>
          </AnimatePresence>
        </div>
      </MenuPopoverButton>

      <MenuPopover isOpen={isOpen} setOpen={setOpen}>
        <div className="flex items-center gap-3 pl-4 pr-3 py-3 border-b border-grey-900 justify-between bg-linear-to-b to-white/0 from-white/[1%] ">
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
