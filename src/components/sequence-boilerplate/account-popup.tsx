import useMeasure from "react-use-measure";
import { GradientAvatar } from "../gradient-avatar/GradientAvatar";
import { shortAddress, mediumAddress } from "../../helpers/short-address";
import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { MenuPopover } from "../menu-popover/MenuPopover";
import { MenuPopoverButton } from "../menu-popover/MenuPopoverButton";
import { Svg } from "../svg/Svg";

export function AccountPopup({ address, chain, disconnect, walletCallback }) {
  const [isCopying, setIsCopying] = useState(false);

  useEffect(() => {
    let timer;
    if (isCopying) {
      timer = window.setTimeout(() => setIsCopying(false), 1000);
    }
    return () => window.clearTimeout(timer);
  }, [isCopying]);

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
          <div className="grid grid-cols-1 grid-rows-1">
            <AnimatePresence>
              {isCopying ? (
                <motion.div
                  className="col-start-1 row-start-1 z-50 flex gap-1 items-center justify-center text-14 border border-grey-800 rounded-[8px] bg-grey-950/95"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Svg name="Checkmark" className="size-4" />
                  Copied
                </motion.div>
              ) : null}
            </AnimatePresence>
            <button
              type="button"
              onClick={() => {
                copyToClipboard(address as string);
                setIsCopying(true);
              }}
              className={`col-start-1 row-start-1 flex flex-col group px-3 py-2 hover:bg-grey-900 border border-transparent hover:border-grey-800 w-full rounded-[8px] transition-all duration-300`}
              // onMouseDown={() => setIsCopying(true)}
              // onMouseUp={() => setIsCopying(false)}
              onMouseEnter={() => setState(true)}
              onMouseLeave={() => setState(false)}
            >
              <span className="text-12 text-grey-100 leading-snug text-start relative inline-block overflow-hidden w-full">
                <motion.span
                  className="inline-block overflow-hidden text-right "
                  variants={variants}
                  animate={state ? "show" : "hide"}
                  initial="hide"
                >
                  <span ref={elementRef}>Copy </span>
                  <span>Wallet Address</span>
                </motion.span>
              </span>
              <span className="text-14 inline-flex gap-1 items-center break-words">
                <span className="sm:hidden">{mediumAddress(address)}</span>
                <span className="hidden sm:inline-block">{address}</span>{" "}
                <Svg name="Copy" className="size-4 text-grey-200" />
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col text-14 items-start p-1">
          {walletCallback ? (
            <button
              type="button"
              onClick={walletCallback}
              rel="noopener noreferrer"
              className="flex gap-3 items-center px-3 py-2 hover:bg-grey-900 border border-transparent hover:border-grey-800 transition-colors duration-300 w-full rounded-[8px]"
            >
              <span className="h-6 w-7 flex items-center justify-center border border-grey-800/50 rounded-[6px]">
                <Svg name="Wallet" className="text-white size-4" />
              </span>
              Open wallet
            </button>
          ) : (
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
          )}
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
