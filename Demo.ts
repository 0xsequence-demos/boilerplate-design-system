import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "boilerplate-design-system/styles.css";
import "@0xsequence/design-system/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
