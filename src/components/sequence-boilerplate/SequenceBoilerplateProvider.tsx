import React from "react";
import { SequenceBoilerplateContext } from "./SequenceBoilerplateContext";
import { DEFAULT_DOCS_URL } from "../constants";

export type SequenceBoilerplateProps = {
  children: React.ReactNode;
  walletCallback?: () => void;
} & SequenceBoilerplateContext;

export function SequenceBoilerplateProvider({
  name,
  description,
  githubUrl,
  docsUrl,
  useAuth,
  faucetUrl,
  wagmi,
  balance,
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
        balance,
      }}
    >
      {children}
    </SequenceBoilerplateContext.Provider>
  );
}
