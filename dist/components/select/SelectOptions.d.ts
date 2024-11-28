type OptionsProps = {
    items: string[] | {
        value: string;
        label: string;
    }[];
    selected?: string;
};
export declare function SelectOptions({ items }: OptionsProps): import("react/jsx-runtime").JSX.Element[];
export {};
