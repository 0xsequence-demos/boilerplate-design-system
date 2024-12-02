import { WithVariants } from '../types';
type RootSubvariants = {
    bg: "included";
};
type RootProps = {
    children?: React.ReactNode;
    asChild?: false;
    id?: string;
} & WithVariants<"input", null, RootSubvariants>;
export declare function SequenceBoilerplateRoot(props: RootProps): import("react/jsx-runtime").JSX.Element;
export {};
