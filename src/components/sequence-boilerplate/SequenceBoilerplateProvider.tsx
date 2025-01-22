import React from "react";
import { SequenceBoilerplateContext } from "./SequenceBoilerplateContext";
import { DEFAULT_DOCS_URL } from "../constants";

export type SequenceBoilerplateProps = {
  children: React.ReactNode;
} & SequenceBoilerplateContext;

export function SequenceBoilerplateProvider({
  name,
  description,
  githubUrl,
  docsUrl,
  useAuth,
  faucetUrl,
  wagmi,
  children,
}: SequenceBoilerplateProps) {
  return (
    <SequenceBoilerplateContext.Provider
      value={{
        githubUrl,
        docsUrl: docsUrl || DEFAULT_DOCS_URL,
        name,
        description,
        faucetUrl,
        wagmi,
        useAuth,
      }}
    >
      {children}
    </SequenceBoilerplateContext.Provider>
  );
}
