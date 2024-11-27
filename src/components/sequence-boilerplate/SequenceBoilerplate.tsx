import React from "react";
import { GithubCorner } from "../github-corner/GithubCorner";
import { SequenceBoilerplateContext } from "./SequenceBoilerplateContext";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export function SequenceBoilerplate({
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
    <SequenceBoilerplateContext.Provider
      value={{ githubUrl, name, description, useAuth }}
    >
      <GithubCorner to={githubUrl} />
      <Header name={name} description={description} />

      <div className="py-8">{children}</div>

      <Footer />
    </SequenceBoilerplateContext.Provider>
  );
}

export function SsrRoot({ children }: { children: React.ReactNode }) {
  return <div id="root">{children}</div>;
}
