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
export declare function SelectOptions({ items, native }: OptionsProps): import("react/jsx-runtime").JSX.Element;
