import { forwardRef } from "react";
import type { PolymorphicRef, WithVariants } from "../types";
import { defineComponent } from "../../helpers/define-component";

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
    <div ref={ref} {...defineComponent("card", variant, mods)} {...restProps}>
      {children}
    </div>
  );
}

export const Card = forwardRef(CardComponent);
