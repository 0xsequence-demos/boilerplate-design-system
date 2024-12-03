import { defineComponent } from "../../helpers/define-component";
import { getProps } from "../../helpers/get-props";
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
  const { children, variant, subvariants, ...restProps } =
    getProps<SegmentedInputProps>(props);

  // Focus on the text input if there is a click anywhere in the input that doesn't have an already clickable element
  // Ie, click an icon to focus on the input, but the disconnect button will still work
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
        // Hit area button spanning the entire parent element
        type="button"
        tabIndex={-1}
        className="absolute w-full h-full inset-0 z-0 cursor-text"
        onClick={handleInternalFocus}
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
  const { children, subvariants, ...restProps } =
    getProps<SegmentedInputSegmentProps>(props);

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
