import { defineComponent } from "../../helpers/define-component";
import { getProps } from "../../helpers/get-props";
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
  const {
    children,
    variant,
    subvariants,
    asChild = false,
    id,
    ...restProps
  } = getProps<InputProps>(props);

  const { name } = useField();

  const defaultSubvariants = Object.assign(
    {
      width: "full",
    },
    subvariants
  );

  return (
    <Slot
      asChild={asChild}
      fallbackAs="input"
      name={name}
      id={id || name}
      {...defineComponent("input", variant, defaultSubvariants)}
      {...restProps}
    >
      {children}
    </Slot>
  );
}
