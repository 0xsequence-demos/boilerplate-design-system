import * as React from "react";
import type { SVGProps } from "react";
const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    role="img"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M4 11.445v5.11h12v-5.11h-1.333v3.777H5.333v-3.777zM5.973 7.47l.943.943 2.418-2.417v7.28h1.333v-7.28l2.417 2.417.943-.943L10 3.444z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUpload;
