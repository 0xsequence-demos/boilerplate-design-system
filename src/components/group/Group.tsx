import { forwardRef } from "react";
import { applyMods } from "../../helpers/apply-variants";
import { Slot } from "../slot/Slot";
import { WithVariants } from "../types";
import { PolymorphicRef } from "@0xsequence/design-system";

type GroupModifiers = {
  space: "lg";
};

type Props = {
  asChild?: boolean;
  children: React.ReactNode;
} & WithVariants<"div", null, GroupModifiers>;

function GroupElement(props: Props, ref: PolymorphicRef<"div">) {
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

type GroupTitleModifiers = {
  space: "lg";
};

type TitleProps = {
  children: React.ReactNode;
} & WithVariants<"h2", null, GroupTitleModifiers>;

function Title(props: TitleProps) {
  const { children, variant = "initial", mods } = props;

  return (
    <h2
      className="self-start font-bold"
      data-component="group-title"
      data-variant={variant}
      data-mods={applyMods<GroupTitleModifiers>(mods)}
    >
      {children}
    </h2>
  );
}

export const Group = Object.assign(forwardRef(GroupElement), { Title });
