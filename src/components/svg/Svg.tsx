import { Slot } from "../slot/Slot";
import * as Svgs from "./index";
import { type SVGProps } from "react";

const SvgComponents = Svgs as Record<
  keyof typeof Svgs | string,
  React.ComponentType<SVGProps<SVGSVGElement>>
>;

export function Svg({
  name,
  alt = undefined,
  className = "",
  ...props
}: SVGProps<SVGSVGElement> & {
  name: keyof typeof Svgs | string;
  className?: string;
  alt?: string;
}) {
  const SvgComponent = SvgComponents?.[name];

  return (
    <Slot
      fallbackAs="svg"
      name={name}
      {...{
        preserveAspectRatio: "xMinYMin",
        "aria-hidden": !alt ? true : undefined,
        role: alt ? "img" : "presentation",
        title: alt,
        "aria-label": alt || undefined,
        focusable: "false",
        className: `${className} flex-shrink-0`.trim(),
      }}
      asChild
      {...props}
    >
      <SvgComponent />
    </Slot>
  );
}
