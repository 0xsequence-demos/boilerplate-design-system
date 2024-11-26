import "./index.css";
import { Button } from "@0xsequence/design-system";
import "@0xsequence/design-system/styles.css";
import { SequenceDemoKit } from "./components/sequence-demo-kit/SequenceDemoKit";
import { useState } from "react";
function App() {
  const [page, setPage] = useState("root");

  return (
    <SequenceDemoKit
      githubUrl="https://github.com"
      name="Sequence Demo"
      description="Sequence demo squad"
    >
      {page === "root" && (
        <Button
          label="Connect"
          variant="primary"
          onClick={() => setPage("inner")}
        />
      )}

      {page === "inner" && <div>Inner page</div>}
    </SequenceDemoKit>
  );
}

export default App;
