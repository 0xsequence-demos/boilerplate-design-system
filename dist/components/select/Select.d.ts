import { default as React } from 'react';
import { SelectOptions } from './SelectOptions';
import { WithVariants } from '../types';
type SelectProps = {
    defaultValue?: string;
    selected?: string;
    native?: boolean;
    icon?: string;
    children: React.ReactElement<{
        native: boolean;
    }>;
} & WithVariants<"div", null, {
    "min-size"?: "none" | "sm" | "md" | "lg";
}>;
export declare const Select: React.ForwardRefExoticComponent<Omit<SelectProps, "ref"> & React.RefAttributes<HTMLDivElement>> & {
    Options: typeof SelectOptions;
};
export {};
