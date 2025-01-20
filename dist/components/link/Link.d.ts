import { WithVariants } from '../types';
type LinkVariant = "primary" | "secondary" | "tertiary";
type LinkModifiers = {
    size: "sm" | "md" | "lg";
    rounded: "none" | "sm" | "full";
    flex: "start";
};
type LinkProps = {
    href: string;
    children: React.ReactNode;
} & WithVariants<"a", LinkVariant, LinkModifiers>;
export declare const Link: import('react').ForwardRefExoticComponent<Omit<LinkProps, "ref"> & import('react').RefAttributes<HTMLAnchorElement>>;
export {};
