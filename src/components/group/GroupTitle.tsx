import { defineComponentFromProps } from "../../helpers/define-component";
import { WithVariants } from "../types";

type GroupTitleModifiers = {
  space: "lg";
};

type TitleProps = {
  children: React.ReactNode;
} & WithVariants<"h2", null, GroupTitleModifiers>;

export function GroupTitle(props: TitleProps) {
  const { children, ...restProps } = defineComponentFromProps<TitleProps>(
    "group-title",
    props
  );

  return <h2 {...restProps}>{children}</h2>;
}
