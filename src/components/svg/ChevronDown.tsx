import * as React from "react";
import type { SVGProps } from "react";
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    role="img"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m3.888 7.53 1.06-1.06 5.47 5.47 5.47-5.47 1.06 1.06-6.53 6.53z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronDown;
