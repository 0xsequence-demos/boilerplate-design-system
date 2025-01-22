export function MenuPopoverButton(props: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  const { isOpen, setOpen, children } = props;

  return (
    <button
      type="button"
      className={`ml-auto mr-0 text-14 inline-flex gap-2 hover:bg-grey-800 border border-grey-800/50 hover:border-grey-700 px-2 py-1.5 bg-grey-900 rounded-[0.5rem] overflow-hidden relative ${
        isOpen ? "grayscale opacity-60 pointer-events-none" : ""
      } transition-all duration-300`}
      onClick={() => setOpen((state) => !state)}
      disabled={isOpen}
    >
      {children}
    </button>
  );
}
