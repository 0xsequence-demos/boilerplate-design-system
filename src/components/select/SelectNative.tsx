import { Svg } from "../svg/Svg";

import { defineComponentFromProps } from "../../helpers/define-component";
import { WithVariants, PolymorphicRef } from "../types";
import { forwardRef, useCallback, useState } from "react";

type SelectProps = {
  defaultValue?: string;
  arrowIcon?: string;
  children: React.ReactNode;
  onValueChange?: (value: string) => void;
} & WithVariants<"div", null, { "min-size"?: "none" | "sm" | "md" | "lg" }>;

export function SelectElement(props: SelectProps, ref: PolymorphicRef<"div">) {
  const {
    defaultValue,
    children,
    arrowIcon = "ChevronDown",
    ...restProps
  } = defineComponentFromProps<SelectProps>("select", props);

  // const defaultSubvariants = {
  //   "min-size": "md",
  // };

  const [icon, setIcon] = useState(null);

  function handleChange(e) {
    if (props?.onChange) {
      props.onChange(e);
    }
    if (props?.onValueChange) {
      props.onValueChange(e.target.value);
    }

    const icon = e?.target?.querySelector("option:checked")?.dataset?.icon;
    if (icon) {
      setIcon(icon);
    }
  }

  const handleLoad = useCallback((el) => {
    handleChange({ target: el });
    return ref;
  }, []);

  return (
    <div ref={handleLoad} {...restProps}>
      {icon ? <img src={icon} width="20" className="size-5" alt="" /> : null}
      <div className="absolute w-[2.5rem] z-10 right-0 pointer-events-none top-0 bottom-0 items-center justify-center flex cursor-pointer">
        <Svg name={arrowIcon} className="w-4 h-4 text-white" />
      </div>
      <select onChange={handleChange} defaultValue={defaultValue}>
        {children}
      </select>
    </div>
  );
}

export const SelectNative = forwardRef(SelectElement);
