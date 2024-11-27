import { useField } from "../action/providers/FieldProvider";
import { forwardRef } from "react";
import { WithVariants } from "../types";
import { defineComponent } from "../../helpers/define-component";
import { PolymorphicRef } from "@0xsequence/design-system";

type LabelProps = {
  children: React.ReactNode;
} & WithVariants<"label", null, null>;

export function LabelElement(props: LabelProps, ref: PolymorphicRef<"label">) {
  const { children, variant, mods, ...restProps } = props;

  const { name } = useField();

  return (
    <label
      ref={ref}
      htmlFor={name}
      {...defineComponent("label", variant, mods)}
      {...restProps}
    >
      {children}
    </label>
  );
}

export const Label = forwardRef(LabelElement);
