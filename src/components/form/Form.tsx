import { ZodObject } from "zod";
import { useState, useRef, type ComponentProps, useEffect } from "react";
import { FormProvider } from "../form/FormProvider"; //useForm
import {
  createFormObjectWithoutValidation,
  validateAndCreateFormObjectOrThrow,
} from "../../helpers/validate";
import { setStoreData } from "../../helpers/session-store";
import { FormEvent } from "react";

export type FormHandler = (
  event: FormEvent<HTMLFormElement>,
  data: unknown | Promise<unknown | void> | void,
) => unknown | Promise<unknown | void> | void; //FormHandlerReturn<T> | Promise<FormHandlerReturn<T> | void> | void;

// type FormHandlerReturn<T = Record<string, unknown>> = T;

type FormProps = {
  children:
    | React.ReactNode
    | (({
        // success,
        errors,
        data,
      }: {
        // success: boolean;
        errors?: Record<string, any>;
        data?: Record<string, any>;
        persist?: boolean;
      }) => React.ReactNode);
  schema?: ZodObject;
  method?: "POST" | "GET" | "PUT" | "DELETE";
  onAction?: (
    event: FormEvent<HTMLFormElement>,
    data: unknown | Promise<unknown | void> | void,
  ) => unknown | Promise<unknown | void> | void;
  name?: string;
} & ComponentProps<"form">;

function FormComponent({
  children,
  name,
  method = "POST",
  onAction,
  schema,
  ...rest
}: FormProps) {
  const [errors, setErrors] = useState();
  const [data, setData] = useState<string | Record<string, unknown>>({});

  // Generate a camelCase name from the onAction function name -- handleSignMessage -> signMessage
  const storeKey = name;
  // name ||
  // (onAction && typeof onAction === "function" && onAction.name !== "onAction")
  //   ? transformName(onAction.name, { prefix: "handle" })
  //   : name || null;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formdata = new FormData(event.currentTarget);

    try {
      // Validate formdata with the schema, or create a form object without validation
      const data = schema
        ? validateAndCreateFormObjectOrThrow(formdata, schema)
        : createFormObjectWithoutValidation(formdata);

      if (onAction && typeof onAction === "function") {
        const result = await onAction(event, data);

        // If the action doesn't return, set the data to the raw form data
        if (!result) {
          setData(data);
        }

        if (result) {
          // If records are returned, set the data to the records
          if (result.data) setData(result.data);

          if (result.error) throw result.error;

          // If persist is true, set the store data in the session
          if (result.persist && storeKey) {
            setStoreData(storeKey, result.data);
          }

          setErrors({});
        }
      }
    } catch (error) {
      if (typeof error?.flatten === "function") {
        setErrors({ [storeKey]: error.flatten() });
        return;
      }

      if (error.message) {
        setErrors({
          [storeKey]: { formErrors: [error.message], fieldErrors: [] },
        });
        return;
      }

      // if (error instanceof ZodError) {
      //   setErrors({ [key]: error.flatten() });
      // } else {
      //   setErrors({ [key]: "Unknown intent" });
      // }
    }
  }

  const ref = useRef<HTMLFormElement>(null);

  function updateFieldValues(e: CustomEvent) {
    const data = e.detail;

    if (data.name === storeKey && ref.current) {
      Object.keys(data.fields).forEach((key) => {
        const value = data.fields[key];
        if (ref && ref.current) {
          const el = ref?.current?.querySelector(
            `input[name=${key}]`,
          ) as HTMLInputElement;
          if (el) {
            el.value = value;
          }
        }
      });
    }
  }

  useEffect(() => {
    const dom = ref.current;

    if (dom) {
      dom.addEventListener("updateFieldValues", updateFieldValues);
    }

    return () => {
      if (dom) {
        dom.removeEventListener("updateFieldValues", updateFieldValues);
      }
    };
  }, []);

  return (
    <FormProvider
      value={{
        name,
        data,
        setData,
        ref,
        errors: errors && errors?.[storeKey],
      }}
    >
      <form
        method={method}
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col gap-4 items-stretch"
        ref={ref}
        id={storeKey}
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
