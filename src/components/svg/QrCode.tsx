import * as React from "react";
import type { SVGProps } from "react";
const SvgQrCode = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.418 3.6h-2.5v2.5h2.5zm0-1.5h1.5v5.5h-5.5V2.1h4m0 12h-2.5v2.5h2.5zm0-1.5h1.5v5.5h-5.5v-5.5h4m8-9h2.5v2.5h-2.5zm4-1.5h-5.5v5.5h5.5V2.1m-1.5 12h-2.5v2.5h2.5zm0-1.5h1.5v5.5h-5.5v-5.5h4M9.668 2.1v7.25h-7.25v1.5h8.75V2.1zm1.5 10.5v5.5h-1.5v-5.5zm1.75-1.75h5.5v-1.5h-5.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgQrCode;
