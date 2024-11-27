import { ModifierOptions, WithVariants } from '../types';
type ButtonVariant = "primary" | "secondary";
type ButtonModifiers = ModifierOptions<{
    size: "sm" | "md" | "lg";
    rounded: "none" | "sm" | "full";
}>;
type ButtonProps = {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
} & WithVariants<"button", ButtonVariant, ButtonModifiers>;
export declare const Button: import('react').ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import('react').RefAttributes<HTMLButtonElement>>;
export {};
