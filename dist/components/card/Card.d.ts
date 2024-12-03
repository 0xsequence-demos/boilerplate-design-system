import { ElementType } from 'react';
import { WithVariants } from '../types';
export type CardProps<T extends ElementType = "div"> = {
    children: React.ReactNode;
    collapsable?: boolean;
} & WithVariants<T, null, null>;
export declare function Card(props: CardProps<"div" | "details">): import("react/jsx-runtime").JSX.Element;
