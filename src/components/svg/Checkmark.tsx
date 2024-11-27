import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    role="img"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="m4.304 10.232 4.263 4.79 7.13-11.238"
    />
  </svg>
);
export default SvgCheckmark;
