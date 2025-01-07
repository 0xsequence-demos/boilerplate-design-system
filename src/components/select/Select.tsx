import React, { forwardRef } from "react";
import { SelectOptions, type Option } from "./SelectOptions";

import { WithVariants } from "../types";
import { SelectRadix } from "./SelectRadix";
import { SelectNative } from "./SelectNative";
import { PolymorphicRef } from "../../../dist/components/types";
import { getProps } from "../../helpers/get-props";

export type SelectProps = {
  defaultValue?: string;
  options?: string[] | Option[];
  native?: boolean;
  icon?: string;
  onValueChange: (value: string) => void;
  children?: React.ReactElement<{ native: boolean }>;
} & WithVariants<"div", null, { "min-size"?: "none" | "sm" | "md" | "lg" }>;

function SelectElement(props: SelectProps, ref: PolymorphicRef<"div">) {
  const { options, native = false, children } = getProps<SelectProps>(props);

  const optionsChildren = React.isValidElement(children)
    ? React.cloneElement(children, { native }) // Inject the native property
    : children;

  return native ? (
    <SelectNative ref={ref} {...props}>
      {options ? <SelectOptions items={options} native /> : optionsChildren}
    </SelectNative>
  ) : (
    <SelectRadix ref={ref} {...props}>
      {options ? <SelectOptions items={options} /> : optionsChildren}
    </SelectRadix>
  );
}

export const Select = Object.assign(forwardRef(SelectElement), {
  Options: SelectOptions,
});
