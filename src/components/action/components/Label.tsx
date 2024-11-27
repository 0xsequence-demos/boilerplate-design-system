import { useField } from "../providers/FieldProvider";
import { type ComponentProps } from "react";

export function Label({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & ComponentProps<"label">) {
  const { name } = useField();

  return (
    <label htmlFor={name} {...rest}>
      {children}
    </label>
  );
}
