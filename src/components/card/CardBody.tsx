import { defineComponent } from "../../helpers/define-component";
import { WithVariants } from "../types";

type CardBody = {
  children: React.ReactNode;
} & WithVariants<"div", null, null>;

export function CardBody(props: CardBody) {
  const { children, subvariants, variant, ...restProps } = props;

  return (
    <div {...defineComponent("card-body", variant, subvariants)} {...restProps}>
      {children}
    </div>
  );
}
