import { ChangeEvent, useRef, useEffect, useState } from "react";
import clsx from "clsx";

export function Textarea({
  maxLength,
  name,
  id,
  placeholder,
  className = "",
}: {
  maxLength?: number;
  name?: string;
  id?: string;
  placeholder?: string;
  className?: string;
}) {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const [textLength, setTextLength] = useState(0);

  const charactersRemaining = maxLength ? maxLength - textLength : false;

  function adjustHeight(el: HTMLTextAreaElement) {
    if (el && el.style) {
      el.style.height = `auto`;
      el.style.height = `${el.scrollHeight}px`;
    }
  }

  useEffect(() => {
    if (ref.current) {
      adjustHeight(ref.current);
      const value = ref.current?.value;
      setTextLength(value.length);
    }
  }, []);

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    // Automatically scale the textbox to fit the written text.
    if (e.currentTarget) {
      adjustHeight(e.currentTarget);
    }

    const value = e.currentTarget.value;
    setTextLength(value.length);
  }

  return (
    <>
      {charactersRemaining && maxLength && maxLength > 0 ? (
        <div className="p-2 w-full flex justify-end">
          <CharacterCount currentLength={textLength} maxLength={maxLength} />
        </div>
      ) : null}
      <textarea
        rows={1}
        ref={ref}
        placeholder={placeholder}
        className={clsx([
          "outline-hidden resize-none min-h-[8rem] appearance-none border-none bg-transparent",
          className,
        ])}
        // className={clsx(["@textarea", className])}
        onChange={handleChange}
        onInput={handleChange}
        name={name}
        id={id}
      ></textarea>
    </>
  );
}

const variant_status = {
  ok: "bg-emerald-500",
  warn: "bg-yellow-500",
  full: "bg-red-600",
};

export const CharacterCount = ({
  currentLength,
  maxLength,
}: {
  currentLength: number;
  maxLength: number;
}) => {
  const percentage = (currentLength / maxLength) * 100;

  const status = percentage > 100 ? "full" : percentage >= 90 ? "warn" : "ok";
  const charactersRemaining = maxLength - currentLength;
  const warningAnnouncement =
    charactersRemaining < 0
      ? "You've reached the maximum lenght for this text area"
      : null;

  return (
    <div className="inline-flex self-end items-center justify-end gap-3 text-14 text-neutral-700 bg-neutral-100 px-3 py-1 rounded-full">
      <div role="alert" aria-relevant="additions text" className="sr-only">
        {warningAnnouncement}
      </div>

      <span>{charactersRemaining} characters remaining</span>

      <div
        className="w-[32px] h-[8px] rounded-full bg-neutral-200 shadow-[0_0_0_1px_rgba(0,0,0,0.1)_inset] overflow-hidden"
        role="meter"
        aria-label={`Maximum of ${maxLength} characters`}
        aria-valuenow={currentLength}
        aria-valuetext={`${currentLength} characters used`}
        aria-valuemin={0}
        aria-valuemax={maxLength}
      >
        <div
          className={`
          ${variant_status[status || "ok"]}
          h-full rounded-full"
        `}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
