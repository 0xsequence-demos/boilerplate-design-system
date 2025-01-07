import { forwardRef } from "react";
import { PolymorphicRef, WithVariants } from "../types";
import { defineComponentFromProps } from "../../helpers/define-component";

type LinkVariant = "primary" | "secondary" | "tiny";

type LinkModifiers = {
  size: "sm" | "md" | "lg";
  rounded: "none" | "sm" | "full";
  flex: "start";
};

type LinkProps = {
  href: string;
  children: React.ReactNode;
} & WithVariants<"a", LinkVariant, LinkModifiers>;

function LinkComponent(props: LinkProps, ref: PolymorphicRef<"a">) {
  const {
    href,
    children,
    ...restProps
  } = defineComponentFromProps<LinkProps>("a", props);

  return (
    <a href={href} ref={ref} {...restProps}>
      {children}
    </a>
  );
}

export const Link = forwardRef(LinkComponent);
