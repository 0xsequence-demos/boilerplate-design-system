import { WithVariants } from '../types';
type InputModifiers = {
    width?: "full";
};
type InputProps = {
    children?: React.ReactNode;
    asChild?: boolean;
    controlled?: boolean;
    id?: string;
} & WithVariants<"input", "transparent", InputModifiers>;
export declare function Input(props: InputProps): import("react/jsx-runtime").JSX.Element;
export {};
