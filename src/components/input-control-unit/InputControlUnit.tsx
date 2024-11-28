import { defineComponent } from "../../helpers/define-component";
import { WithVariants } from "../types";

type InputControlUnitModifiers = {
  direction?: "row" | "column";
  behaviour?: "text" | "button";
  width?: "full";
};

type InputControlUnitProps = {
  children: React.ReactNode;
} & WithVariants<"div", null, InputControlUnitModifiers>;

export function InputControlUnitElement(props: InputControlUnitProps) {
  const { children, variant, subvariants, ...restProps } = props;

  function handleInternalFocus(e) {
    const focusable = e?.target?.parentNode?.querySelector("input");
    console.log(focusable);
    if (focusable) {
      focusable.focus();
    }
  }

  return (
    <div
      {...defineComponent("input-control-unit", variant, subvariants)}
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

type InputControlUnitSegmentSubvariants = {
  pointer?: "none";
};

type InputControlUnitSegmentProps = {
  children: React.ReactNode;
} & WithVariants<"div", null, InputControlUnitSegmentSubvariants>;

function InputControlUnitSegment(props: InputControlUnitSegmentProps) {
  const { children, subvariants, ...restProps } = props;

  return (
    <div
      {...defineComponent("input-control-unit-segment", null, subvariants)}
      {...restProps}
    >
      {children}
    </div>
  );
}

export const InputControlUnit = Object.assign(InputControlUnitElement, {
  Segment: InputControlUnitSegment,
});
