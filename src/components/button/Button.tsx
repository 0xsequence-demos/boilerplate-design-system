import { forwardRef } from "react";
import { PolymorphicRef, WithVariants } from "../types";
import { defineComponent } from "../../helpers/define-component";
import { getProps } from "../../helpers/get-props";

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
    variant,
    subvariants,
    ...restProps
  } = getProps<ButtonProps>(props);

  return (
    <button
      ref={ref}
      type={type}
      {...defineComponent("button", variant, subvariants)}
      {...restProps}
    >
      {children}
    </button>
  );
}

export const Button = forwardRef(ButtonComponent);
