import { createContext } from "react";

export type SequenceBoilerplateContext = {
  name?: string;
  description?: string;
  useAuth?: boolean;
  githubUrl?: string;
};

export const SequenceBoilerplateContext =
  createContext<SequenceBoilerplateContext | null>(null);
