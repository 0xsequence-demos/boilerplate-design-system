import * as React from "react";
import type { SVGProps } from "react";
const SvgHidden = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    role="img"
    {...props}
  >
    <path
      fill="currentColor"
      d="M11.425 5.189q-.7-.091-1.425-.092c-3.564 0-6.716 1.703-8.445 4.296l-.277.416.277.416c1.141 1.712 2.902 3.035 4.991 3.737l.744-1.336c-1.727-.522-3.19-1.527-4.187-2.817C4.59 7.887 7.11 6.597 10 6.597q.318 0 .63.02z"
    />
    <path fill="currentColor" d="M10.179 7.43a2.385 2.385 0 0 0-2.105 3.786z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m5.979 17.041.874.486 1.722-3.097q.7.09 1.425.091c3.564 0 6.716-1.702 8.445-4.296l.277-.416-.277-.416c-1.141-1.711-2.902-3.035-4.991-3.737l1.5-2.697-.875-.486zM12.71 6.993l-.783 1.41a2.386 2.386 0 0 1-2.105 3.786L9.368 13q.313.02.631.02c2.89 0 5.41-1.29 6.897-3.212-.998-1.29-2.46-2.294-4.187-2.816"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHidden;
