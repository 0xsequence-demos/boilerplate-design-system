import { createContext } from "react";

export type SequenceBoilerplateContext = {
  name?: string;
  description?: string;
  useAuth?: boolean;
  githubUrl?: string;
  docsUrl?: string;
  faucetUrl?: string;
  wagmi?: Record<string, any>;
};

export const SequenceBoilerplateContext =
  createContext<SequenceBoilerplateContext | null>(null);
