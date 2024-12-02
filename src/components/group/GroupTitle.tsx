import { defineComponent } from "../../helpers/define-component";
import { WithVariants } from "../types";

type GroupTitleModifiers = {
  space: "lg";
};

type TitleProps = {
  children: React.ReactNode;
} & WithVariants<"h2", null, GroupTitleModifiers>;

export function GroupTitle(props: TitleProps) {
  const { children, variant, subvariants } = props;

  return (
    <h2 {...defineComponent("group-title", variant, subvariants)}>
      {children}
    </h2>
  );
}
