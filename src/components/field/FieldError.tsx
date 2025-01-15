import { Svg } from "../svg/Svg";
import { useField } from "./FieldProvider";
// import { Icon } from "~/views/icons/Icon";

export function FieldError() {
  const { error } = useField();

  const firstError = error?.[0];

  return error ? (
    <div className="text-14 leading-tight inline-flex gap-2 mt-2 items-center ">
      <span className=" flex-shrink-0 flex items-center justify-center h-[1.25em]">
        <Svg name="Warning" className="size-5" />
        <span className="sr-only">Error</span>
      </span>
      <span className="text-white">{firstError}</span>
    </div>
  ) : null;
}
