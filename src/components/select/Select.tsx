import { forwardRef } from "react";
import { Svg } from "../svg/Svg";
import { SelectOptions } from "./SelectOptions";
import { PolymorphicRef } from "@0xsequence/design-system";
import { defineComponent } from "../../helpers/define-component";
import { WithVariants } from "../types";

type SelectProps = {
  selected?: string;
  icon?: string;
  children: React.ReactNode;
} & WithVariants<"div", null, { "min-size"?: "none" | "sm" | "md" | "lg" }>;

function SelectElement(props: SelectProps, ref: PolymorphicRef<"div">) {
  const { selected, children, variant, mods, icon = "ChevronDown" } = props;

  const defaultMods = {
    "min-size": "md",
  };

  return (
    <div
      {...defineComponent("select", variant, Object.assign(defaultMods, mods))}
      ref={ref}
    >
      <div className="absolute w-[2.5rem] z-10 right-0 pointer-events-none top-0 bottom-0 items-center justify-center flex cursor-pointer">
        <Svg name={icon} className="w-4 h-4 text-white" />
      </div>
      <select defaultValue={selected}>{children}</select>
    </div>
  );
}

export const Select = Object.assign(forwardRef(SelectElement), {
  Options: SelectOptions,
});
