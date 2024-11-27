import * as React from "react";
import type { SVGProps } from "react";
const SvgMinter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    role="img"
    {...props}
  >
    <path fill="#000" d="M3.362 5.144 7.874 2.54l4.089 7.083-4.512 2.605z" />
    <path stroke="#000" strokeWidth={1.5} d="m9.92 6.08 7.332-4.233" />
    <path
      fill="#000"
      d="M3.977 15.387 2 13.41h13.615l-.723 1.977h-1.346c-.33 0-.989.198-.989.989s.66.988.989.988h.597v1.483h-8.83v-1.483H6.41c.79 0 .988-.659.988-.988 0-.33-.198-.989-.988-.989z"
    />
  </svg>
);
export default SvgMinter;
