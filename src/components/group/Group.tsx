import { forwardRef } from "react";
import { applyMods } from "../../helpers/apply-variants";
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
    variant = "initial",
    mods,
    ...restProps
  } = props;

  return (
    <Slot
      ref={ref}
      fallbackAs="div"
      asChild={asChild}
      data-component="group"
      data-variant={variant}
      data-mods={applyMods<GroupModifiers>(mods)}
      {...restProps}
    >
      {children}
    </Slot>
  );
}

export const Group = Object.assign(forwardRef(GroupElement), {
  Title: GroupTitle,
});
