import { ZodObject, ZodRawShape } from "zod";
import {
  useState,
  useRef,
  type ComponentProps,
  useEffect,
  useCallback,
} from "react";
import { FormProvider, type FormErrors } from "../form/FormProvider"; //useForm
import {
  createFormObjectWithoutValidation,
  validateAndCreateFormObjectOrThrow,
} from "../../helpers/validate";
import { setStoreData } from "../../helpers/session-store";
import { FormEvent } from "react";

export type FormActionResult = {
  data?: unknown;
  error?: unknown;
  persist?: boolean;
  success?: boolean;
};

export type FormHandler = (
  event: FormEvent<HTMLFormElement>,
  data: Record<string, unknown>,
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
        errors?: FormErrors;
        data?: unknown;
        persist?: boolean;
      }) => React.ReactNode);
  schema?: ZodObject<ZodRawShape>;
  method?: "POST" | "GET" | "PUT" | "DELETE";
  onAction?: (
    event: FormEvent<HTMLFormElement>,
    data: Record<string, unknown>,
  ) => unknown | Promise<unknown | void> | void;
  name?: string;
} & ComponentProps<"form">;

function isFormActionResult(value: unknown): value is FormActionResult {
  if (!value || typeof value !== "object") return false;
  return (
    "data" in value ||
    "error" in value ||
    "persist" in value ||
    "success" in value
  );
}

function FormComponent({
  children,
  name,
  method = "POST",
  onAction,
  schema,
  ...rest
}: FormProps) {
  const [errors, setErrors] = useState<Record<string, FormErrors> | undefined>();
  const [data, setData] = useState<unknown>({});
  const [success, setSuccess] = useState<boolean | undefined>(undefined);

  // Generate a camelCase name from the onAction function name -- handleSignMessage -> signMessage
  const storeKey = name ?? "form";
  // name ||
  // (onAction && typeof onAction === "function" && onAction.name !== "onAction")
  //   ? transformName(onAction.name, { prefix: "handle" })
  //   : name || null;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formdata = new FormData(event.currentTarget);

    try {
      // Validate formdata with the schema, or create a form object without validation
      const data = (schema
        ? validateAndCreateFormObjectOrThrow(formdata, schema)
        : createFormObjectWithoutValidation(formdata)) as Record<
        string,
        unknown
      >;

      if (onAction && typeof onAction === "function") {
        const result = await onAction(event, data);

        // If the action doesn't return, set the data to the raw form data
        if (!result) {
          setData(data);
          setSuccess(true);
          setErrors({});
        }

        if (Array.isArray(result)) {
          const [resultData, resultSuccess] = result;
          if (typeof resultSuccess === "boolean") {
            setSuccess(resultSuccess);
          }
          if (resultData !== undefined) {
            setData(resultData);
          }
          setErrors({});
        } else if (isFormActionResult(result)) {
          if (result.data !== undefined) setData(result.data);
          if (typeof result.success === "boolean") setSuccess(result.success);
          if (result.error) {
            setSuccess(false);
            throw result.error;
          }

          // If persist is true, set the store data in the session
          if (result.persist) {
            setStoreData(storeKey, result.data);
          }

          setErrors({});
        } else if (result) {
          setData(result);
          setSuccess(true);
          setErrors({});
        }
      }
    } catch (error) {
      setSuccess(false);
      if (typeof error?.flatten === "function") {
        setErrors({ [storeKey]: error.flatten() as FormErrors });
        return;
      }

      if (error instanceof Error) {
        setErrors({
          [storeKey]: { formErrors: [error.message], fieldErrors: {} },
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

  const updateFieldValues = useCallback(
    (event: Event) => {
      const data = (
        event as CustomEvent<{ name: string; fields: Record<string, string> }>
      ).detail;

      if (data?.name === storeKey && ref.current) {
        Object.keys(data.fields).forEach((key) => {
          const value = data.fields[key];
          if (ref.current) {
            const el = ref.current.querySelector(
              `input[name=${key}]`,
            ) as HTMLInputElement | null;
            if (el) {
              el.value = value;
            }
          }
        });
      }
    },
    [storeKey],
  );

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
  }, [updateFieldValues]);

  return (
    <FormProvider
      value={{
        name,
        data,
        setData,
        ref,
        success,
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
