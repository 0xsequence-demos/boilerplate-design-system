import { Dialog, Popover } from "react-aria-components";
import { AnimatePresence, motion } from "motion/react";
import { useRef } from "react";

interface PopoverMenuProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export function MenuPopover({ isOpen, setOpen, children }: PopoverMenuProps) {
  const triggerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={triggerRef}>
      <AnimatePresence>
        {isOpen ? (
          <Popover
            className="max-w-screen"
            isOpen={true}
            triggerRef={triggerRef}
            onOpenChange={setOpen}
          >
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.99 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  default: {
                    type: "spring",
                    duration: 0.3,
                    bounce: 0.4,
                  },
                  opacity: { duration: 0.25, bounce: 0.75 },
                },
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.99,
                transition: {
                  y: {
                    type: "spring",
                    duration: 0.1,
                    bounce: 0,
                  },
                  opacity: { duration: 0.1, bounce: 0 },
                },
              }}
              transition={{}}
              className="bg-grey-950 border border-grey-700 rounded-[0.75rem] shadow-2xl overflow-clip w-full sm:w-auto sm:min-w-[320px] max-w-full"
            >
              <Dialog>{children}</Dialog>
            </motion.div>
          </Popover>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
