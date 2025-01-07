import { useField } from "../field/FieldProvider";
import { forwardRef } from "react";
import { WithVariants } from "../types";
import { defineComponentFromProps } from "../../helpers/define-component";
import { PolymorphicRef } from "@0xsequence/design-system";

type LabelProps = {
  children: React.ReactNode;
} & WithVariants<"label", null, null>;

export function LabelElement(props: LabelProps, ref: PolymorphicRef<"label">) {
  const { children, ...restProps } = defineComponentFromProps<LabelProps>(
    "label",
    props
  );

  const { name } = useField();

  return (
    <label ref={ref} htmlFor={name} {...restProps}>
      {children}
    </label>
  );
}

export const Label = forwardRef(LabelElement);
