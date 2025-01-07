import { forwardRef } from "react";
import { defineComponentFromProps } from "../../helpers/define-component";
import { Slot } from "../slot/Slot";
import { WithVariants } from "../types";
import { PolymorphicRef } from "@0xsequence/design-system";
import { GroupTitle } from "./GroupTitle";

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
    ...restProps
  } = defineComponentFromProps<GroupProps>("group", props);

  return (
    <Slot ref={ref} fallbackAs="div" asChild={asChild} {...restProps}>
      {title ? <GroupTitle>{title}</GroupTitle> : null}
      {children}
    </Slot>
  );
}

export const Group = Object.assign(forwardRef(GroupElement), {
  Title: GroupTitle,
});
