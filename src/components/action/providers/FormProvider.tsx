import { createContext, useContext } from "react";

type FormContext = {
  name: string;
  data?: string | Record<string, unknown>;
  ref: React.MutableRefObject<HTMLFormElement | null>;
  errors: { fieldErrors: { [key: string]: string[] }; formErrors: string[] };
};

const FormContext = createContext<null | FormContext>(null);

export function useForm() {
  const context = useContext(FormContext);
  if (!context) {
    return {} as FormContext;
    throw new Error("useForm must be used within a Form");
  }
  return context;
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
