import { ZodError, ZodSchema } from "zod";
import { useState, useRef, type ComponentProps } from "react";
import { FormProvider } from "./providers/FormProvider"; //useForm
import {
  createFormObjectWithoutValidation,
  validateAndCreateFormObjectOrThrow,
} from "./validate";
import { transformName } from "../../helpers/transform-name";
import { setStoreData } from "../../helpers/session-store";

function FormComponent({
  children,
  name,
  method = "POST",
  onAction,
  schema,
  ...rest
}: {
  children:
    | React.ReactNode
    | (({
        // success,
        errors,
        data,
      }: {
        // success: boolean;
        errors: unknown;
        data: unknown;
      }) => React.ReactNode);
  schema?: ZodSchema;
  method?: "POST" | "GET" | "PUT" | "DELETE";
  onAction?: (
    event: React.FormEvent<HTMLFormElement>,
    data: Record<string, unknown>
  ) => [Record<string, unknown> | string, boolean?] | void;
  name?: string;
} & ComponentProps<"form">) {
  const [errors, setErrors] = useState();
  const [data, setData] = useState<string | Record<string, unknown>>({});

  // Generate a camelCase name from the onAction function name -- handleSignMessage -> signMessage
  const storeKey =
    onAction && typeof onAction === "function" && onAction.name !== "onAction"
      ? transformName(onAction.name, { prefix: "handle" })
      : name || null;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
    try {
      // Validate formdata with the schema, or create a form object without validation
      const data = schema
        ? validateAndCreateFormObjectOrThrow(formdata, schema)
        : createFormObjectWithoutValidation(formdata);

      if (onAction && typeof onAction === "function") {
        const result = onAction(event, data);

        // If the action doesn't return, set the data to the raw form data
        if (!result) {
          setData(data);
        }

        if (result) {
          const [records, persist] = result;

          // If records are returned, set the data to the records
          if (records) setData(records);

          // If persist is true, set the store data in the session
          if (persist && storeKey) {
            setStoreData(storeKey, records);
          }
        }
      }
    } catch (error) {
      const key = storeKey || name || "unknown";
      if (error instanceof ZodError) {
        setErrors({ [key]: error.flatten() });
      } else {
        setErrors({ [key]: "Unknown intent" });
      }
    }
  }

  const ref = useRef<HTMLFormElement>(null);

  return (
    <FormProvider
      value={{
        name,
        data,
        ref,
        errors: errors && errors?.[name],
      }}
    >
      <form
        method={method}
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col gap-4 items-stretch"
        ref={ref}
        {...rest}
      >
        {name ? <input type="hidden" name="name" value={name} /> : null}

        {typeof children === "function" ? children({ errors, data }) : children}
      </form>
    </FormProvider>
  );
}

// function FormSuccess({ children }: { children: React.ReactNode }) {
//   const { success } = useForm();

//   if (!success) return null;

//   return <>{children}</>;
// }

// function FormInitial({ children }: { children: React.ReactNode }) {
//   const { success } = useForm();

//   if (success) return null;

//   return <>{children}</>;
// }

export const Form = Object.assign(FormComponent, {
  // Success: FormSuccess,
  // Initial: FormInitial,
});
