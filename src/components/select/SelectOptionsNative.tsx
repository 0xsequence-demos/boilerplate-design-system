import { OptionsProps } from "./SelectOptions";
export function SelectOptionsNative({ items }: OptionsProps) {
  return items.map((item) => {
    const value = typeof item === "string" ? item : item.value;
    const label = typeof item === "string" ? item : item.label;
    const icon = typeof item === "string" ? null : item.icon;
    return (
      <option key={value} value={value} data-icon={icon}>
        {label}
      </option>
    );
  });
}
