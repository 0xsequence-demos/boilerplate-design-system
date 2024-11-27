import { forwardRef } from "react";
import type { PolymorphicRef, WithVariants } from "../types";
import { applyMods } from "../../helpers/apply-variants";

type CardVariant = "primary" | "secondary";

type CardModifiers = {
  size: "sm" | "md" | "lg";
  rounded: "none" | "sm" | "full";
};

type CardProps = {
  children: React.ReactNode;
} & WithVariants<"div", CardVariant, CardModifiers>;

function CardComponent(props: CardProps, ref: PolymorphicRef<"div">) {
  const { children, mods, variant = "initial", ...restProps } = props;

  return (
    <div
      ref={ref}
      data-component="card"
      data-variant={variant}
      data-mods={applyMods<CardModifiers>(mods)}
      {...restProps}
    >
      {children}
    </div>
  );
}

export const Card = forwardRef(CardComponent);
