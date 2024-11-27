import { ZodError, ZodSchema } from "zod";
import { useState, useRef, type ComponentProps } from "react";
import { FormProvider, useForm } from "./providers/FormProvider";
import { validateFormdata } from "./validate";

function ActionComponent({
  children,
  intent,
  name,
  method = "POST",
  serverValidationOnly = false,
  onSubmit,
  schema,
  ...rest
}: {
  children:
    | React.ReactNode
    | (({
        success,
        errors,
        data,
      }: {
        success: boolean;
        errors: unknown;
        data: unknown;
      }) => React.ReactNode);
  schema?: ZodSchema;
  method?: "POST" | "GET" | "PUT" | "DELETE";
  intent: string;

  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => boolean | void;

  name?: string;
  serverValidationOnly?: boolean;
} & ComponentProps<"form">) {
  name = name ?? intent;

  const [errors, setErrors] = useState();
  const [data, setData] = useState<Record<string, any>>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (onSubmit && typeof onSubmit === "function") {
      const next = onSubmit(event);

      if (!next) {
        return false;
      }
    }

    if (serverValidationOnly) {
      return;
    }
    const formdata = new FormData(event.currentTarget);
    console.log(formdata);
    try {
      // const schema = clientAction(formdata, [intent]);

      validateFormdata(formdata, schema);
    } catch (error) {
      event.preventDefault();
      if (error instanceof ZodError) {
        const key = name || intent || "unknown";
        setErrors({ [key]: error.flatten() });
      } else {
        setErrors({ form: "Unknown intent" });
      }
    }
  }

  const ref = useRef<HTMLFormElement>(null);

  return (
    <FormProvider
      value={{
        intent,
        name,
        data,
        ref,
        success: data?.success,
        errors: errors?.[name || intent],
      }}
    >
      <form
        method={method}
        onSubmit={handleSubmit}
        noValidate
        ref={ref}
        {...rest}
      >
        <input type="hidden" name="intent" value={intent} />
        <input type="hidden" name="form" value={name} />

        {typeof children === "function"
          ? children({ success: data?.success, errors, data })
          : children}
      </form>
    </FormProvider>
  );
}

function ActionSuccess({ children }: { children: React.ReactNode }) {
  const { success } = useForm();

  if (!success) return null;

  return <>{children}</>;
}

function ActionInitial({ children }: { children: React.ReactNode }) {
  const { success } = useForm();

  if (success) return null;

  return <>{children}</>;
}

export const Action = Object.assign(ActionComponent, {
  Success: ActionSuccess,
  Initial: ActionInitial,
});
