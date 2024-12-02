import { PolymorphicRef } from '@0xsequence/design-system';
import { WithVariants } from '../types';
type SelectProps = {
    defaultValue?: string;
    arrowIcon?: string;
    children: React.ReactNode;
    onValueChange?: (value: string) => void;
} & WithVariants<"div", null, {
    "min-size"?: "none" | "sm" | "md" | "lg";
}>;
export declare function SelectElement(props: SelectProps, ref: PolymorphicRef<"div">): import("react/jsx-runtime").JSX.Element;
export declare const SelectNative: import('react').ForwardRefExoticComponent<Omit<SelectProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
