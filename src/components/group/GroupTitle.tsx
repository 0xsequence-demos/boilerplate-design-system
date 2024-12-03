import { defineComponent } from "../../helpers/define-component";
import { getProps } from "../../helpers/get-props";
import { WithVariants } from "../types";

type GroupTitleModifiers = {
  space: "lg";
};

type TitleProps = {
  children: React.ReactNode;
} & WithVariants<"h2", null, GroupTitleModifiers>;

export function GroupTitle(props: TitleProps) {
  const { children, variant, subvariants } = getProps<TitleProps>(props);

  return (
    <h2 {...defineComponent("group-title", variant, subvariants)}>
      {children}
    </h2>
  );
}
