import { defineComponentFromProps } from "../../helpers/define-component";
import { useField } from "../field/FieldProvider";
import { Slot } from "../slot/Slot";
import { WithVariants } from "../types";

type InputModifiers = {
  width?: "full";
};

type InputProps = {
  children?: React.ReactNode;
  asChild?: false;
  controlled?: boolean;
  id?: string;
} & WithVariants<"input", "transparent", InputModifiers>;

export function Input(props: InputProps) {
  const {
    children,
    asChild = false,
    controlled = false,
    id,
    ...restProps
  } = defineComponentFromProps<InputProps>("input", props);

  const { name, value, update } = useField();

  console.log(update);

  const defaultValues = controlled
    ? {
        value,
        onChange: () => {
          // update("yes");
        },
      }
    : {};

  return (
    <Slot
      asChild={asChild}
      fallbackAs="input"
      name={name}
      defaultValue={value}
      id={id || name}
      {...defaultValues}
      {...restProps}
    >
      {children}
    </Slot>
  );
}
