import { defineComponent } from "../../helpers/define-component";
import { WithVariants } from "../types";

type SegmentedInputModifiers = {
  direction?: "row" | "column";
  behaviour?: "text" | "button";
  width?: "full";
};

type SegmentedInputProps = {
  children: React.ReactNode;
} & WithVariants<"div", null, SegmentedInputModifiers>;

export function SegmentedInputElement(props: SegmentedInputProps) {
  const { children, variant, subvariants, ...restProps } = props;

  function handleInternalFocus(e) {
    const focusable = e?.target?.parentNode?.querySelector("input");
    if (focusable) {
      focusable.focus();
    }
  }

  return (
    <div
      {...defineComponent("segmented-input", variant, subvariants)}
      {...restProps}
    >
      <button
        type="button"
        tabIndex={-1}
        className="absolute w-full h-full inset-0 z-0 cursor-text"
        onClick={handleInternalFocus}
        data-focus-button
      ></button>
      {children}
    </div>
  );
}

type SegmentedInputSegmentSubvariants = {
  pointer?: "none";
};

type SegmentedInputSegmentProps = {
  children: React.ReactNode;
} & WithVariants<"div", null, SegmentedInputSegmentSubvariants>;

function SegmentedInputSegment(props: SegmentedInputSegmentProps) {
  const { children, subvariants, ...restProps } = props;

  return (
    <div
      {...defineComponent("segmented-input-segment", null, subvariants)}
      {...restProps}
    >
      {children}
    </div>
  );
}

export const SegmentedInput = Object.assign(SegmentedInputElement, {
  Segment: SegmentedInputSegment,
});
