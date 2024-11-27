import { useContext, createContext, useState } from "react";

export type PageContext = {
  current: string;
  setCurrent: (current: string) => void;
};

export const PageContext = createContext<PageContext | null>(null);

export function usePage() {
  const context = useContext(PageContext);

  if (!context) {
    throw new Error("useSequenceDemoKit must be used within a PageProvider");
  }

  return context;
}

export function Pages({
  initial,
  children,
}: {
  initial: string;
  children: React.ReactNode;
}) {
  const [current, setCurrent] = useState(initial);

  return (
    <PageContext.Provider value={{ current, setCurrent }}>
      {children}
    </PageContext.Provider>
  );
}

export function Page({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  const { current } = usePage();

  if (name !== current) return null;

  return children;
}
