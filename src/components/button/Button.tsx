import { WithVariants } from "../types";
import { defineComponentFromProps } from "../../helpers/define-component";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "text";

type ButtonModifiers = {
  size: "sm" | "md" | "lg";
  rounded: "none" | "sm" | "full";
  padding: "comfortable";
};

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
} & WithVariants<"button", ButtonVariant, ButtonModifiers>;

export function Button(props: ButtonProps) {
  const {
    children,
    type = "button",
    ...restProps
  } = defineComponentFromProps<ButtonProps>("button", props);

  return (
    <button type={type} {...restProps}>
      {children}
    </button>
  );
}
