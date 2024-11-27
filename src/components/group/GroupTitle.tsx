import { applyMods } from "../../helpers/apply-variants";
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
      data-component="group-title"
      data-variant={variant}
      data-mods={applyMods<GroupTitleModifiers>(mods)}
    >
      {children}
    </h2>
  );
}
