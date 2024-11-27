import { defineComponent } from "../../helpers/define-component";
import { WithVariants } from "../types";

type GroupTitleModifiers = {
  space: "lg";
};

type TitleProps = {
  children: React.ReactNode;
} & WithVariants<"h2", null, GroupTitleModifiers>;

export function GroupTitle(props: TitleProps) {
  const { children, variant, mods } = props;

  return <h2 {...defineComponent("group-title", variant, mods)}>{children}</h2>;
}
