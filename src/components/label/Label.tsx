import { useField } from "../field/FieldProvider";
import { forwardRef } from "react";
import { WithVariants, PolymorphicRef } from "../types";
import { defineComponentFromProps } from "../../helpers/define-component";

type LabelProps = {
  children: React.ReactNode;
} & WithVariants<"label", null, null>;

export function LabelElement(props: LabelProps, ref: PolymorphicRef<"label">) {
  const { children, ...restProps } = defineComponentFromProps<LabelProps>(
    "label",
    props,
  );

  const { name } = useField();

  return (
    <label ref={ref} htmlFor={name} {...restProps}>
      {children}
    </label>
  );
}

export const Label = forwardRef(LabelElement);
