import React from "react";
import { GithubCorner } from "../github-corner/GithubCorner";
import { SequenceDemoKitContext } from "./SequenceDemoKitContext";
import "./sequence-demo-kit.css";
import { Title } from "../title/Title";
export function SequenceDemoKit({
  githubUrl,
  name,
  description,
  useAuth,
  children,
}: {
  githubUrl: string;
  name: string;
  description: string;
  useAuth?: boolean;
  children: React.ReactNode;
}) {
  return (
    <SequenceDemoKitContext.Provider
      value={{ githubUrl, name, description, useAuth }}
    >
      {githubUrl ? <GithubCorner to={githubUrl} /> : null}
      <Title name={name} description={description} />

      <div className="py-8">{children}</div>

      <div className="text-14 font-medium">
        <p>
          Want to learn more? Read the{"  "}
          <a
            href="https://docs.sequence.xyz/solutions/wallets/sequence-kit/overview/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            docs
          </a>
          !
        </p>
      </div>
    </SequenceDemoKitContext.Provider>
  );
}

export function SsrRoot({ children }: { children: React.ReactNode }) {
  return <div id="root">{children}</div>;
}
