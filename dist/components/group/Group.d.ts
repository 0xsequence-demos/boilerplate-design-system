import { WithVariants } from '../types';
import { GroupTitle } from './GroupTitle';
type GroupModifiers = {
    space: "lg";
};
type GroupProps = {
    asChild?: boolean;
    title?: string;
    children: React.ReactNode;
} & WithVariants<"div", null, GroupModifiers>;
export declare const Group: import('react').ForwardRefExoticComponent<Omit<GroupProps, "ref"> & import('react').RefAttributes<HTMLDivElement>> & {
    Title: typeof GroupTitle;
};
export {};
