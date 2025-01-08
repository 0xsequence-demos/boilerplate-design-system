import { WithVariants } from "../types";
import { defineComponentFromProps } from "../../helpers/define-component";

type ButtonVariant = "primary" | "secondary" | "tiny";

type ButtonModifiers = {
  size: "sm" | "md" | "lg";
  rounded: "none" | "sm" | "full";
  flex: "start";
};

type ButtonProps = {
  children: React.ReactNode;
  href: string;
} & WithVariants<"a", ButtonVariant, ButtonModifiers>;

export function ButtonLink(props: ButtonProps) {
  const { children, href, ...restProps } =
    defineComponentFromProps<ButtonProps>("button", props);

  return (
    <a href={href} {...restProps}>
      {children}
    </a>
  );
}
