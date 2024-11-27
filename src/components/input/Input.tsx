import { defineComponent } from "../../helpers/define-component";
import { useField } from "../action/providers/FieldProvider";
import { Slot } from "../slot/Slot";
import { WithVariants } from "../types";

type InputModifiers = {
  width?: "full";
};

type InputProps = {
  children?: React.ReactNode;
  asChild?: false;
  id?: string;
} & WithVariants<"input", "transparent", InputModifiers>;

export function Input(props: InputProps) {
  const { children, variant, mods, asChild = false, id, ...restProps } = props;

  const { name } = useField();

  return (
    <Slot
      asChild={asChild}
      fallbackAs="input"
      name={name}
      id={id || name}
      {...defineComponent("input", variant, mods)}
      {...restProps}
    >
      {children}
    </Slot>
  );
}
