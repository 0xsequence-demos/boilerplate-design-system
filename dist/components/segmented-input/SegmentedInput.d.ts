import { WithVariants } from '../types';
type SegmentedInputModifiers = {
    direction?: "row" | "column";
    behaviour?: "text" | "button";
    width?: "full";
};
type SegmentedInputProps = {
    children: React.ReactNode;
} & WithVariants<"div", null, SegmentedInputModifiers>;
export declare function SegmentedInputElement(props: SegmentedInputProps): import("react/jsx-runtime").JSX.Element;
type SegmentedInputSegmentSubvariants = {
    pointer?: "none";
};
type SegmentedInputSegmentProps = {
    children: React.ReactNode;
} & WithVariants<"div", null, SegmentedInputSegmentSubvariants>;
declare function SegmentedInputSegment(props: SegmentedInputSegmentProps): import("react/jsx-runtime").JSX.Element;
export declare const SegmentedInput: typeof SegmentedInputElement & {
    Segment: typeof SegmentedInputSegment;
};
export {};
