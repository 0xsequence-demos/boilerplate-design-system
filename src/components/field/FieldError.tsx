import { useField } from "./FieldProvider";
// import { Icon } from "~/views/icons/Icon";

export function FieldError() {
  const { error } = useField();

  const firstError = error?.[0];

  return error ? (
    <div className="text-17 inline-flex gap-2 mt-2 items-center bg-neutral-600 px-3 py-2 rounded-[7px]">
      <span className=" flex-shrink-0 flex items-center justify-center h-[1.5rem]">
        {/* <Icon name="alert" className="size-[1.5rem] text-white" /> */}
        <span className="sr-only">Error</span>
      </span>
      <span className="text-white">{firstError}</span>
    </div>
  ) : null;
}
