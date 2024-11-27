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

export function InputControlUnit(props: InputControlUnitProps) {
  const { children, variant, mods, ...restProps } = props;

  function handleInternalFocus(e) {
    const focusable = e?.target?.parentNode?.querySelector("input");
    console.log(focusable);
    if (focusable) {
      focusable.focus();
    }
  }

  return (
    <div
      {...defineComponent("input-control-unit", variant, mods)}
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
