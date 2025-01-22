interface PopoverMenuProps {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}
export declare function MenuPopover({ isOpen, setOpen, children }: PopoverMenuProps): import("react/jsx-runtime").JSX.Element;
export {};
