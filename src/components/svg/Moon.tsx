import * as React from "react";
import type { SVGProps } from "react";
const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.918 14.994v.752q-.519.36-1.08.618A7.003 7.003 0 0 1 6.968 5.05a7 7 0 0 1 8.95-.796v.752a4.979 4.979 0 0 0-3.293 1.459 5 5 0 0 0 3.293 8.53m-4.353-.398q.495.493 1.059.859a5.5 5.5 0 1 1 0-10.91q-.564.366-1.06.859a6.5 6.5 0 0 0 0 9.192"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMoon;
