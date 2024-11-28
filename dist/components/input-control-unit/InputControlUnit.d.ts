import { WithVariants } from '../types';
type InputControlUnitModifiers = {
    direction?: "row" | "column";
    behaviour?: "text" | "button";
    width?: "full";
};
type InputControlUnitProps = {
    children: React.ReactNode;
} & WithVariants<"div", null, InputControlUnitModifiers>;
export declare function InputControlUnitElement(props: InputControlUnitProps): import("react/jsx-runtime").JSX.Element;
type InputControlUnitSegmentSubvariants = {
    pointer?: "none";
};
type InputControlUnitSegmentProps = {
    children: React.ReactNode;
} & WithVariants<"div", null, InputControlUnitSegmentSubvariants>;
declare function InputControlUnitSegment(props: InputControlUnitSegmentProps): import("react/jsx-runtime").JSX.Element;
export declare const InputControlUnit: typeof InputControlUnitElement & {
    Segment: typeof InputControlUnitSegment;
};
export {};
