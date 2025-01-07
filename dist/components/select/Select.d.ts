import { default as React } from 'react';
import { SelectOptions, Option } from './SelectOptions';
import { WithVariants } from '../types';
export type SelectProps = {
    defaultValue?: string;
    options?: string[] | Option[];
    native?: boolean;
    icon?: string;
    onValueChange: (value: string) => void;
    children?: React.ReactElement<{
        native: boolean;
    }>;
} & WithVariants<"div", null, {
    "min-size"?: "none" | "sm" | "md" | "lg";
}>;
export declare const Select: React.ForwardRefExoticComponent<Omit<SelectProps, "ref"> & React.RefAttributes<unknown>> & {
    Options: typeof SelectOptions;
};
