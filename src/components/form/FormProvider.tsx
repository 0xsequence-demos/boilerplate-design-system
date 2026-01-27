/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, Dispatch, SetStateAction } from "react";

export type FormErrors = {
  fieldErrors?: { [key: string]: string[] };
  formErrors?: string[];
};

export type FormContextValue = {
  name: string;
  data?: unknown;
  setData: Dispatch<SetStateAction<unknown>>;
  ref: React.MutableRefObject<HTMLFormElement | null>;
  errors?: FormErrors;
  success?: boolean;
};

export type FormContext = FormContextValue & {
  updateFields: typeof updateFields;
};

const FormContext = createContext<null | FormContextValue>(null);

function updateFields(name: string, fields: Record<string, string>) {
  const event = new CustomEvent("updateFieldValues", {
    detail: {
      name,
      fields,
    },
  });

  const el = document.getElementById(name);
  if (el) {
    el.dispatchEvent(event);
  }
}

export function useForm() {
  const context = useContext(FormContext);
  if (!context) {
    return { updateFields } as FormContext;
    throw new Error("useForm must be used within a Form");
  }
  return { ...context, updateFields };
}
export function FormProvider({
  children,
  value,
}: {
  children: React.ReactNode | ((value: FormContext) => React.ReactNode);
  value: FormContextValue;
}) {
  const valueWithUpdate = { ...value, updateFields };

  return (
    <FormContext.Provider value={value}>
      {typeof children === "function" ? children(valueWithUpdate) : children}
    </FormContext.Provider>
  );
}
