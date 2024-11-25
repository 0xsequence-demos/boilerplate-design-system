import { useContext } from "react";
import { SequenceDemoKitContext } from "./SequenceDemoKitContext";

export function useSequenceDemoKit() {
  const context = useContext(SequenceDemoKitContext);

  if (!context) {
    throw new Error(
      "useSequenceDemoKit must be used within a SequenceDemoKitProvider"
    );
  }

  return context;
}
