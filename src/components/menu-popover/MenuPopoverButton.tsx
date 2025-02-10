import { defineComponentFromProps } from "../../helpers/define-component";
import { WithVariants } from "../types";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "text";

type ButtonModifiers = {
  size: "sm" | "md" | "lg";
  rounded: "none" | "sm" | "full";
  padding: "comfortable";
};

type MenuPopoverButtonProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
} & WithVariants<"button", ButtonVariant, ButtonModifiers>;

export function MenuPopoverButton(props: MenuPopoverButtonProps) {
  const { isOpen, setOpen, children, ...restProps } =
    defineComponentFromProps<MenuPopoverButtonProps>(
      "menuPopoverButton",
      props,
    );

  return (
    <button
      {...restProps}
      type="button"
      onClick={() => setOpen((state) => !state)}
      disabled={isOpen}
    >
      {children}
    </button>
  );
}
