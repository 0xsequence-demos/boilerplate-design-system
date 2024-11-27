type SelectProps = {
    selected?: string;
    children: React.ReactNode;
};
declare function SelectElement({ selected, children }: SelectProps): import("react/jsx-runtime").JSX.Element;
interface OptionsProps {
    items: string[] | {
        value: string;
        label: string;
    }[];
    selected?: string;
}
export declare function Options({ items }: OptionsProps): import("react/jsx-runtime").JSX.Element[];
export declare const Select: typeof SelectElement & {
    Options: typeof Options;
};
export {};
