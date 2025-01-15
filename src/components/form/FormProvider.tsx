import { createContext, useContext, Dispatch, SetStateAction } from "react";

type FormContext = {
  name: string;
  data?: string | Record<string, unknown>;
  setData: Dispatch<SetStateAction<string | Record<string, unknown>>>;
  ref: React.MutableRefObject<HTMLFormElement | null>;
  errors: { fieldErrors: { [key: string]: string[] }; formErrors: string[] };
  updateFields: typeof updateFields;
};

const FormContext = createContext<null | FormContext>(null);

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
  value: FormContext;
}) {
  return (
    <FormContext.Provider value={value}>
      {typeof children === "function" ? children(value) : children}
    </FormContext.Provider>
  );
}
