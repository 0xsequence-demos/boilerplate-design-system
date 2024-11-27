type OptionsProps = {
  items: string[] | { value: string; label: string }[];
  selected?: string;
};

export function SelectOptions({ items }: OptionsProps) {
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
