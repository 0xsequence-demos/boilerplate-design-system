import { ElementType, forwardRef } from "react";
import type { PolymorphicRef, WithVariants } from "../types";
import { defineComponent } from "../../helpers/define-component";
import { CardCollapsableComponent } from "./CardCollapsable";
import { CardSummary } from "./CardSummary";
import { CardBody } from "./CardBody";

type CardVariant = "primary" | "secondary";

type CardModifiers = {
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "full";
  padding?: "none";
};

export type CardProps<T extends ElementType = "div"> = {
  children: React.ReactNode;
} & WithVariants<T, CardVariant, CardModifiers>;

function CardComponent(props: CardProps, ref: PolymorphicRef<"div">) {
  const { children, subvariants, variant, ...restProps } = props;

  return (
    <div
      ref={ref}
      {...defineComponent("card", variant, subvariants)}
      {...restProps}
    >
      {children}
    </div>
  );
}
export const Card = Object.assign(forwardRef(CardComponent), {
  Summary: CardSummary,
  Collapsable: CardCollapsableComponent,
  Body: CardBody,
});
