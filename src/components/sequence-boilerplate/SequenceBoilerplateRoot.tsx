import { defineComponent } from "../../helpers/define-component";

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
  const { variant, subvariants, children, ...restProps } = props;

  return (
    <div {...defineComponent("root", variant, subvariants)} {...restProps}>
      {children}
    </div>
  );
}
