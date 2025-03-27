import { Svg } from "../svg/Svg";

import * as SelectPrimative from "@radix-ui/react-select";

type SelectProps = {
  defaultValue?: string;
  arrowIcon?: string;
  children: React.ReactNode;
};

export function SelectRadix(props: SelectProps) {
  const {
    defaultValue,
    arrowIcon = "ChevronDown",
    children,
    ...restProps
  } = props;

  return (
    <SelectPrimative.Root defaultValue={defaultValue} {...restProps}>
      <SelectPrimative.Trigger className="flex items-center justify-between w-full bg-transparent border border-grey-500 rounded-[0.5rem] text-gray-200 focus:ring-2 ring-blue-500 px-4 py-3">
        <SelectPrimative.Value />
        <Svg name={arrowIcon} width="20" />
      </SelectPrimative.Trigger>

      <SelectPrimative.Portal>
        <SelectPrimative.Content className="rounded-[0.5rem] overflow-clip text-white border border-white bg-light_buttonGlass backdrop-blur-sm z-1000 isolate">
          <SelectPrimative.Viewport className="flex flex-col">
            {children}
          </SelectPrimative.Viewport>
          <SelectPrimative.ScrollDownButton />
          <SelectPrimative.Arrow />
        </SelectPrimative.Content>
      </SelectPrimative.Portal>
    </SelectPrimative.Root>
  );
}
