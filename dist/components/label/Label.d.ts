import { WithVariants } from '../types';
import { PolymorphicRef } from '@0xsequence/design-system';
type LabelProps = {
    children: React.ReactNode;
} & WithVariants<"label", null, null>;
export declare function LabelElement(props: LabelProps, ref: PolymorphicRef<"label">): import("react/jsx-runtime").JSX.Element;
export declare const Label: import('react').ForwardRefExoticComponent<Omit<LabelProps, "ref"> & import('react').RefAttributes<HTMLLabelElement>>;
export {};
