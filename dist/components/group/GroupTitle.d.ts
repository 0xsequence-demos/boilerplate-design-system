import { WithVariants } from '../types';
type GroupTitleModifiers = {
    space: "lg";
};
type TitleProps = {
    children: React.ReactNode;
} & WithVariants<"h2", null, GroupTitleModifiers>;
export declare function GroupTitle(props: TitleProps): import("react/jsx-runtime").JSX.Element;
export {};
