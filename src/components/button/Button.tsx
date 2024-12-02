import { forwardRef } from "react";
import { ModifierOptions, PolymorphicRef, WithVariants } from "../types";
import { defineComponent } from "../../helpers/define-component";

type ButtonVariant = "primary" | "secondary" | "tiny";

type ButtonModifiers = ModifierOptions<{
  size: "sm" | "md" | "lg";
  rounded: "none" | "sm" | "full";
  flex: "start";
}>;

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
  } = props;

  console.log(subvariants);

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
