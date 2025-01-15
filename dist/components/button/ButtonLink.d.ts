import { WithVariants } from '../types';
type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonModifiers = {
    size: "sm" | "md" | "lg";
    rounded: "none" | "sm" | "full";
    flex: "start";
};
type ButtonProps = {
    children: React.ReactNode;
    href: string;
} & WithVariants<"a", ButtonVariant, ButtonModifiers>;
export declare function ButtonLink(props: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
