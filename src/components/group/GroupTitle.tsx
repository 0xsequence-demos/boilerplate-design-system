import { defineComponent } from "../../helpers/define-component";
import { WithVariants } from "../types";

type GroupTitleModifiers = {
  space: "lg";
};

type TitleProps = {
  children: React.ReactNode;
} & WithVariants<"h2", null, GroupTitleModifiers>;

export function GroupTitle(props: TitleProps) {
  const { children, variant = "initial", mods } = props;

  return (
    <h2
      className="self-start font-bold"
      {...defineComponent("group-title", variant, mods)}
    >
      {children}
    </h2>
  );
}
