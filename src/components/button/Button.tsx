import { forwardRef } from "react";
import { PolymorphicRef, WithVariants } from "../types";
import { defineComponentFromProps } from "../../helpers/define-component";

type ButtonVariant = "primary" | "secondary" | "tiny";

type ButtonModifiers = {
  size: "sm" | "md" | "lg";
  rounded: "none" | "sm" | "full";
  flex: "start";
};

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
} & WithVariants<"button", ButtonVariant, ButtonModifiers>;

function ButtonComponent(props: ButtonProps, ref: PolymorphicRef<"button">) {
  const {
    children,
    type = "button",
    ...restProps
  } = defineComponentFromProps<ButtonProps>("button", props);

  return (
    <button ref={ref} type={type} {...restProps}>
      {children}
    </button>
  );
}

export const Button = forwardRef(ButtonComponent);
