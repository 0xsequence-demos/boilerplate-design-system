import * as React from "react";
import type { SVGProps } from "react";
const SvgRelayer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    role="img"
    {...props}
  >
    <path
      fill="currentColor"
      d="M16.365 2.635a2.17 2.17 0 1 1-3.068 3.068 2.17 2.17 0 0 1 3.068-3.068M6.788 14.008a2.17 2.17 0 1 1-3.067 3.067 2.17 2.17 0 0 1 3.067-3.067"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M10.736 4.015h-2.08c-2.763 0-3.498 1.274-3.498 3.498v4.44"
    />
  </svg>
);
export default SvgRelayer;
