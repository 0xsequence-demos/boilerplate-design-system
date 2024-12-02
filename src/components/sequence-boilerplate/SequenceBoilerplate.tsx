import React from "react";
import { GithubCorner } from "../github-corner/GithubCorner";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { useSequenceBoilerplate } from "./useSequenceBoilerplate";
import { SequenceBoilerplateRoot } from "./SequenceBoilerplateRoot";
import {
  SequenceBoilerplateProvider,
  SequenceBoilerplateProps,
} from "./SequenceBoilerplateProvider";

export function SequenceBoilerplate(props: SequenceBoilerplateProps) {
  const { children } = props;

  return (
    <SequenceBoilerplateProvider {...props}>
      <Content>{children}</Content>
    </SequenceBoilerplateProvider>
  );
}

// Can create alterative content layout presets as needed
function Content({ children }: { children: React.ReactNode }) {
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
