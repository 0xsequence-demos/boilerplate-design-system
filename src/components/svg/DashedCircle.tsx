import * as React from "react";
import type { SVGProps } from "react";
const SvgDashedCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    role="img"
    {...props}
  >
    <circle
      cx={10}
      cy={10}
      r={8}
      stroke="#000"
      strokeDasharray="2 4"
      strokeLinecap="round"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgDashedCircle;
