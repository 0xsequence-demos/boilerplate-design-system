import { defineComponentFromProps } from "../../helpers/define-component";

import { WithVariants } from "../types";

type RootSubvariants = {
  bg: "included";
};

type RootProps = {
  children?: React.ReactNode;
  asChild?: false;
  id?: string;
} & WithVariants<"input", null, RootSubvariants>;

export function SequenceBoilerplateRoot(props: RootProps) {
  const { children, ...restProps } = defineComponentFromProps<RootProps>(
    "root",
    props
  );

  return <div {...restProps}>{children}</div>;
}
