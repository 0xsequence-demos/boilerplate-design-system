import { defineComponent } from "../../helpers/define-component";
import { Svg } from "../svg/Svg";
import { CardProps } from "./Card";

export function CardCollapsable(
  props: CardProps<"details"> & { title?: string }
) {
  const { title, children, subvariants, variant, ...restProps } = props;

  return (
    <details
      {...defineComponent("card-collapsable", variant, subvariants)}
      {...restProps}
    >
      {title ? <Summary>{title}</Summary> : null}
      <div className="px-4 pb-4 w-full text-start flex flex-col gap-4">
        {children}
      </div>
    </details>
  );
}

function Summary(props: { children: React.ReactNode }) {
  const { children, ...restProps } = props;

  return (
    <summary
      className="flex items-center justify-between text-14 font-bold p-4"
      {...restProps}
    >
      {children} <Svg name="ChevronDown" width="20" data-arrow />
    </summary>
  );
}
