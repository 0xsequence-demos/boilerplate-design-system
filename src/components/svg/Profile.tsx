import * as React from "react";
import type { SVGProps } from "react";
const SvgProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    role="img"
    {...props}
  >
    <circle cx={10} cy={7.361} r={3.361} fill="currentColor" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16 16.755H4c.029-2.705 2.704-4.89 6-4.89s5.971 2.185 6 4.89"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgProfile;
