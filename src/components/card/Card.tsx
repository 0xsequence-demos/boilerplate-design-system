import { ElementType } from "react";
import type { WithVariants } from "../types";
import { defineComponent } from "../../helpers/define-component";
import { CardCollapsable } from "./CardCollapsable";
import { getProps } from "../../helpers/get-props";

export type CardProps<T extends ElementType = "div"> = {
  children: React.ReactNode;
  collapsable?: boolean;
} & WithVariants<T, null, null>;

export function Card(props: CardProps<"div" | "details">) {
  const { collapsable, ...restProps } = props;

  if (collapsable) {
    return <CardCollapsable {...(restProps as CardProps<"details">)} />;
  }

  return <CardStatic {...(restProps as CardProps<"div">)} />;
}

function CardStatic(props: CardProps<"div">) {
  const { children, subvariants, variant, ...restProps } =
    getProps<CardProps<"div">>(props);

  return (
    <div {...defineComponent("card", variant, subvariants)} {...restProps}>
      {children}
    </div>
  );
}
