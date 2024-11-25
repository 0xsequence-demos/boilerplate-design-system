import { GithubCorner } from "../github-corner/GithubCorner";
import { SequenceDemoKitContext } from "./SequenceDemoKitContext";
import "./sequence-demo-kit.css";
export function SequenceDemoKit({
  githubUrl,
  name,
  description,
  useAuth,
  children,
}: {
  githubUrl?: string;
  name?: string;
  description?: string;
  useAuth?: boolean;
  children: React.ReactNode;
}) {
  return (
    <SequenceDemoKitContext.Provider
      value={{ githubUrl, name, description, useAuth }}
    >
      {githubUrl ? <GithubCorner to={githubUrl} /> : null}
      {children}
    </SequenceDemoKitContext.Provider>
  );
}

export function SsrRoot({ children }: { children: React.ReactNode }) {
  return <div id="root">{children}</div>;
}
