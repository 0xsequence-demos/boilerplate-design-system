import { WithVariants } from '../types';
type CardBody = {
    children: React.ReactNode;
} & WithVariants<"div", null, null>;
export declare function CardBody(props: CardBody): import("react/jsx-runtime").JSX.Element;
export {};
