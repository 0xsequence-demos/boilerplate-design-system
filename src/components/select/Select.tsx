import { Svg } from "../svg/Svg";

type SelectProps = {
  selected?: string;
  children: React.ReactNode;
};

function SelectElement({ selected, children }: SelectProps) {
  return (
    <div className="relative border border-white/20 rounded-md overflow-hidden h-[2.5rem] inline-flex">
      <div className="absolute w-[2.5rem] z-10 right-0 pointer-events-none top-0 bottom-0 items-center justify-center flex cursor-pointer">
        <Svg name="ChevronDown" className="w-4 h-4 text-white" />
      </div>
      <select
        className="appearance-none bg-transparent pl-3 py-1 truncate w-full h-full pr-[2.5rem] min-w-[8rem]"
        defaultValue={selected}
      >
        {children}
      </select>
    </div>
  );
}

interface OptionsProps {
  items: string[] | { value: string; label: string }[];
  selected?: string;
}

export function Options({ items }: OptionsProps) {
  return items.map((item) => {
    const value = typeof item === "string" ? item : item.value;
    const label = typeof item === "string" ? item : item.label;

    return (
      <option key={value} value={value}>
        {label}
      </option>
    );
  });
}

export const Select = Object.assign(SelectElement, { Options });
