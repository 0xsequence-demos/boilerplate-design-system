import * as React from "react";
import type { SVGProps } from "react";
const SvgDevice = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.543 5.188h6.914v11.618H6.543zM5 18.497v-15h10v15zm7-12H8v1.46h4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDevice;
