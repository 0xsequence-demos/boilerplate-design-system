import { useField } from "../providers/FieldProvider";
import { Slot } from "../../slot/Slot";
import type { ComponentProps } from "react";
export function Input({
  children,
  asChild = false,
  id,
  ...restProps
}: {
  children?: React.ReactNode;
  asChild?: boolean;
  id?: string;
} & ComponentProps<"input">) {
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
