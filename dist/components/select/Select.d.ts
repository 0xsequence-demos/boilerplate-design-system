import { SelectOptions } from './SelectOptions';
import { WithVariants } from '../types';
type SelectProps = {
    selected?: string;
    icon?: string;
    children: React.ReactNode;
} & WithVariants<"div", null, {
    "min-size"?: "none" | "sm" | "md" | "lg";
}>;
export declare const Select: import('react').ForwardRefExoticComponent<Omit<SelectProps, "ref"> & import('react').RefAttributes<HTMLDivElement>> & {
    Options: typeof SelectOptions;
};
export {};
