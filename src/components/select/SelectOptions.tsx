import { SelectOptionsNative } from "./SelectOptionsNative";
import { SelectOptionsRadix } from "./SelectOptionsRadix";

export type Option = {
  icon?: string;
  value: string;
  label: string;
};

export type OptionsProps = {
  items: string[] | Option[];
  native?: boolean;
  selected?: string;
};

export function SelectOptions({ items, native }: OptionsProps) {
  return native ? (
    <SelectOptionsNative items={items} />
  ) : (
    <SelectOptionsRadix items={items} />
  );
}
