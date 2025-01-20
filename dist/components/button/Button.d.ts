import { WithVariants } from '../types';
type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonModifiers = {
    size: "sm" | "md" | "lg";
    rounded: "none" | "sm" | "full";
    padding: "comfortable";
};
type ButtonProps = {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
} & WithVariants<"button", ButtonVariant, ButtonModifiers>;
export declare function Button(props: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
