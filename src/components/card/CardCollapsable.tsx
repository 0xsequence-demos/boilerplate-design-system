import { defineComponent } from "../../helpers/define-component";
import { CardProps } from "./Card";

export function CardCollapsableComponent(props: CardProps<"details">) {
  const { children, subvariants, variant, ...restProps } = props;

  return (
    <details
      {...defineComponent("card-collapsable", variant, subvariants)}
      {...restProps}
    >
      {children}
    </details>
  );
}
