import * as SelectPrimative from "@radix-ui/react-select";
import { Svg } from "../svg/Svg";
import { OptionsProps } from "./SelectOptions";

export function SelectOptionsRadix({ items }: OptionsProps) {
  return items.map((item) => {
    const value = typeof item === "string" ? item : item.value;
    const label = typeof item === "string" ? item : item.label;
    const icon = typeof item === "string" ? null : item.icon;

    return (
      <SelectPrimative.Item
        value={value}
        key={value}
        className="min-h-[2rem] px-6 py-3 flex items-center gap-2 hover:outline-none cursor-pointer hover:bg-grey-600"
      >
        <SelectPrimative.ItemIndicator className="size-5">
          <Svg name="Checkmark" width="20" />
        </SelectPrimative.ItemIndicator>
        <SelectPrimative.ItemText asChild>
          <span className="flex gap-3 items-center text-white">
            {icon ? (
              <img src={icon} className="size-5" width="20" alt="" />
            ) : null}
            <span>{label}</span>{" "}
          </span>
        </SelectPrimative.ItemText>
      </SelectPrimative.Item>
    );
  });
}
