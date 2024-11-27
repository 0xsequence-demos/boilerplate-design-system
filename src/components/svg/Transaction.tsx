import * as React from "react";
import type { SVGProps } from "react";
const SvgTransaction = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12.28 2.856-6.71 8.887h4.134l-1.424 6.2 6.887-8.71h-4.322z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTransaction;
