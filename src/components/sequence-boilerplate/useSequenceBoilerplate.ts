import { useContext } from "react";
import { SequenceBoilerplateContext } from "./SequenceBoilerplateContext";

export function useSequenceDemoKit() {
  const context = useContext(SequenceBoilerplateContext);

  if (!context) {
    throw new Error(
      "useSequenceDemoKit must be used within a SequenceBoilerplateProvider"
    );
  }

  return context;
}
