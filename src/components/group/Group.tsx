import { forwardRef } from "react";
import { defineComponent } from "../../helpers/define-component";
import { Slot } from "../slot/Slot";
import { WithVariants } from "../types";
import { PolymorphicRef } from "@0xsequence/design-system";
import { GroupTitle } from "./GroupTitle";

type GroupModifiers = {
  space: "lg";
};

type GroupProps = {
  asChild?: boolean;
  children: React.ReactNode;
} & WithVariants<"div", null, GroupModifiers>;

function GroupElement(props: GroupProps, ref: PolymorphicRef<"div">) {
  const {
    asChild = false,
    children,
    variant,
    subvariants,
    ...restProps
  } = props;

  return (
    <Slot
      ref={ref}
      fallbackAs="div"
      asChild={asChild}
      {...defineComponent("group", variant, subvariants)}
      {...restProps}
    >
      {children}
    </Slot>
  );
}

export const Group = Object.assign(forwardRef(GroupElement), {
  Title: GroupTitle,
});
