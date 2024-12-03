import { forwardRef } from "react";
import { defineComponent } from "../../helpers/define-component";
import { Slot } from "../slot/Slot";
import { WithVariants } from "../types";
import { PolymorphicRef } from "@0xsequence/design-system";
import { GroupTitle } from "./GroupTitle";
import { getProps } from "../../helpers/get-props";

type GroupModifiers = {
  space: "lg";
};

type GroupProps = {
  asChild?: boolean;
  title?: string;
  children: React.ReactNode;
} & WithVariants<"div", null, GroupModifiers>;

function GroupElement(props: GroupProps, ref: PolymorphicRef<"div">) {
  const {
    asChild = false,
    title,
    children,
    variant,
    subvariants,
    ...restProps
  } = getProps<GroupProps>(props);

  return (
    <Slot
      ref={ref}
      fallbackAs="div"
      asChild={asChild}
      {...defineComponent("group", variant, subvariants)}
      {...restProps}
    >
      {title ? <GroupTitle>{title}</GroupTitle> : null}
      {children}
    </Slot>
  );
}

export const Group = Object.assign(forwardRef(GroupElement), {
  Title: GroupTitle,
});
