import { defineComponentFromProps } from "../../helpers/define-component";
import { useField } from "../field/FieldProvider";
import { Slot } from "../slot/Slot";
import { WithVariants } from "../types";

type InputModifiers = {
  width?: "full";
};

type InputProps = {
  children?: React.ReactNode;
  asChild?: boolean;
  controlled?: boolean;
  id?: string;
} & WithVariants<"input", "transparent", InputModifiers>;

export function Input(props: InputProps) {
  const {
    children,
    asChild = false,
    id,
    ...restProps
  } = defineComponentFromProps<InputProps>("input", props);

  const { name } = useField();

  return (
    <Slot
      asChild={asChild}
      fallbackAs="input"
      name={name}
      id={id || name}
      {...restProps}
    >
      {children}
    </Slot>
  );
}
