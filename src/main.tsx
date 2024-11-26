import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Button } from "@0xsequence/design-system";
import "@0xsequence/design-system/styles.css";
import { SequenceDemoKit } from "./components/sequence-demo-kit/SequenceDemoKit";
function App() {
  return (
    <SequenceDemoKit
      githubUrl="https://github.com"
      name="Sequence Demo"
      description="Sequence demo squad"
    >
      <Button label="Connect" variant="primary" />
    </SequenceDemoKit>
  );
}

export default App;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
