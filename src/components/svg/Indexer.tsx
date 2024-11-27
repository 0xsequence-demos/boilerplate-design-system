import * as React from "react";
import type { SVGProps } from "react";
const SvgIndexer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    role="img"
    {...props}
  >
    <path stroke="#000" d="M2.5 2.5h3.571v3.571H2.5z" />
    <path fill="currentColor" stroke="#000" d="M8.214 2.5h3.571v3.571H8.214z" />
    <path
      stroke="#000"
      d="M13.929 2.5H17.5v3.571h-3.571zM2.5 8.214h3.571v3.571H2.5zM8.214 8.214h3.571v3.571H8.214z"
    />
    <path
      fill="currentColor"
      stroke="#000"
      d="M13.929 8.214H17.5v3.571h-3.571zM2.5 13.929h3.571V17.5H2.5z"
    />
    <path
      stroke="#000"
      d="M8.214 13.929h3.571V17.5H8.214zM13.929 13.929H17.5V17.5h-3.571z"
    />
  </svg>
);
export default SvgIndexer;
