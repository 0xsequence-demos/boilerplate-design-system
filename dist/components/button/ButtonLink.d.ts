import { WithVariants } from '../types';
type ButtonVariant = "primary" | "secondary" | "tiny";
type ButtonModifiers = {
    size: "sm" | "md" | "lg";
    rounded: "none" | "sm" | "full";
    flex: "start";
};
type ButtonProps = {
    children: React.ReactNode;
    href: string;
} & WithVariants<"a", ButtonVariant, ButtonModifiers>;
export declare const ButtonLink: import('react').ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import('react').RefAttributes<HTMLAnchorElement>>;
export {};
