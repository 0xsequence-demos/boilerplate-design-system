import React, { forwardRef } from "react";
import { SelectOptions } from "./SelectOptions";
import { PolymorphicRef } from "@0xsequence/design-system";
import { WithVariants } from "../types";
import { SelectRadix } from "./SelectRadix";
import { SelectNative } from "./SelectNative";

type SelectProps = {
  defaultValue?: string;
  selected?: string;
  native?: boolean;
  icon?: string;
  children: React.ReactElement<{ native: boolean }>;
} & WithVariants<"div", null, { "min-size"?: "none" | "sm" | "md" | "lg" }>;

function SelectElement(props: SelectProps, ref: PolymorphicRef<"div">) {
  const { native = false, children } = props;

  const options = React.isValidElement(children)
    ? React.cloneElement(children, { native }) // Inject the native property
    : children;

  return native ? (
    <SelectNative ref={ref} {...props}>
      {options}
    </SelectNative>
  ) : (
    <SelectRadix ref={ref} {...props}>
      {options}
    </SelectRadix>
  );
}

export const Select = Object.assign(forwardRef(SelectElement), {
  Options: SelectOptions,
});
