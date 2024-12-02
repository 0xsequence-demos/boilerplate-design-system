import React from "react";
import { GithubCorner } from "../github-corner/GithubCorner";
import { SequenceBoilerplateContext } from "./SequenceBoilerplateContext";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { DEFAULT_DOCS_URL } from "../constants";
import { useSequenceBoilerplate } from "./useSequenceBoilerplate";
import { SequenceBoilerplateRoot } from "./SequenceBoilerplateRoot";

type SequenceBoilerplateProps = {
  name: string;
  description: string;
  githubUrl: string;
  docsUrl?: string;
  useAuth?: boolean;
  children: React.ReactNode;
};

export function SequenceBoilerplateProvider({
  name,
  description,
  githubUrl,
  docsUrl,
  useAuth,
  children,
}: SequenceBoilerplateProps) {
  return (
    <SequenceBoilerplateContext.Provider
      value={{
        githubUrl,
        docsUrl: docsUrl || DEFAULT_DOCS_URL,
        name,
        description,
        useAuth,
      }}
    >
      {children}
    </SequenceBoilerplateContext.Provider>
  );
}

export function StandardStructure({ children }: { children: React.ReactNode }) {
  const { name, description, githubUrl, docsUrl } = useSequenceBoilerplate();

  return (
    <SequenceBoilerplateRoot>
      <GithubCorner to={githubUrl} />
      <Header name={name} description={description} />

      <div className="py-8">{children}</div>

      <Footer to={docsUrl} />
    </SequenceBoilerplateRoot>
  );
}

export function SequenceBoilerplate(props: SequenceBoilerplateProps) {
  const { children } = props;

  return (
    <SequenceBoilerplateProvider {...props}>
      <StandardStructure>{children}</StandardStructure>
    </SequenceBoilerplateProvider>
  );
}
