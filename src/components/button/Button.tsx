import { forwardRef } from "react";
import { ModifierOptions, PolymorphicRef, WithVariants } from "../types";
import { applyMods } from "../../helpers/apply-variants";

type ButtonVariant = "primary" | "secondary";

type ButtonModifiers = ModifierOptions<{
  size: "sm" | "md" | "lg";
  rounded: "none" | "sm" | "full";
}>;

type Props = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
} & WithVariants<"button", ButtonVariant, ButtonModifiers>;

function ButtonComponent(props: Props, ref: PolymorphicRef<"button">) {
  const {
    children,
    variant = "initial",
    mods,
    type = "button",
    ...restProps
  } = props;

  return (
    <button
      ref={ref}
      type={type}
      data-component="button"
      data-variant={variant}
      data-mods={applyMods<ButtonModifiers>(mods)}
      {...restProps}
    >
      {children}
    </button>
  );
}

export const Button = forwardRef(ButtonComponent);
