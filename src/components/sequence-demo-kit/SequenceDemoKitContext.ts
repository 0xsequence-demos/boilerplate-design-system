import { createContext } from "react";

export type SequenceDemoKitContext = {
  name?: string;
  description?: string;
  useAuth?: boolean;
  githubUrl?: string;
};

export const SequenceDemoKitContext =
  createContext<SequenceDemoKitContext | null>(null);
