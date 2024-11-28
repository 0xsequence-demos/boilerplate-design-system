import { ElementType } from 'react';
import { WithVariants } from '../types';
import { CardCollapsableComponent } from './CardCollapsable';
import { CardSummary } from './CardSummary';
import { CardBody } from './CardBody';
type CardVariant = "primary" | "secondary";
type CardModifiers = {
    size?: "sm" | "md" | "lg";
    rounded?: "none" | "sm" | "full";
    padding?: "none";
};
export type CardProps<T extends ElementType = "div"> = {
    children: React.ReactNode;
} & WithVariants<T, CardVariant, CardModifiers>;
export declare const Card: import('react').ForwardRefExoticComponent<Omit<CardProps<"div">, "ref"> & import('react').RefAttributes<HTMLDivElement>> & {
    Summary: typeof CardSummary;
    Collapsable: typeof CardCollapsableComponent;
    Body: typeof CardBody;
};
export {};
