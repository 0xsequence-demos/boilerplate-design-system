import { createContext, useContext } from "react";

type FieldContext = { name: string; error?: string[] };

const FieldContext = createContext<null | FieldContext>(null);

export function useField() {
  const context = useContext(FieldContext);
  if (!context) {
    throw new Error("useField must be used within a Field");
  }
  return context;
}
export function FieldProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: FieldContext;
}) {
  return (
    <FieldContext.Provider value={value}>{children}</FieldContext.Provider>
  );
}
