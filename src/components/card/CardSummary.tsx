import { defineComponent } from "../../helpers/define-component";
import { Svg } from "../svg/Svg";
import { WithVariants } from "../types";

type CardSummaryProps = {
  children: React.ReactNode;
} & WithVariants<"summary", null, null>;

export function CardSummary(props: CardSummaryProps) {
  const { children, subvariants, variant, ...restProps } = props;

  return (
    <summary
      {...defineComponent("card-summary", variant, subvariants)}
      {...restProps}
    >
      {children} <Svg name="ChevronDown" width="20" data-arrow />
    </summary>
  );
}
