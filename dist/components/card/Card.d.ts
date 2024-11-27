import { WithVariants } from '../types';
type CardVariant = "primary" | "secondary";
type CardModifiers = {
    size?: "sm" | "md" | "lg";
    rounded?: "none" | "sm" | "full";
    padding?: "none";
};
type CardProps = {
    children: React.ReactNode;
} & WithVariants<"div", CardVariant, CardModifiers>;
export declare const Card: import('react').ForwardRefExoticComponent<Omit<CardProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
