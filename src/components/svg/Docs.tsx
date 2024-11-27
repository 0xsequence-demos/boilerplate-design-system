import * as React from "react";
import type { SVGProps } from "react";
const SvgDocs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    role="img"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M14.648 8.35 10.797 4.5h-.047v3.85zM9.25 4.5H5.918v11h9V9.85H9.25zM16.418 8l-5-5h-7v14h12z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDocs;
