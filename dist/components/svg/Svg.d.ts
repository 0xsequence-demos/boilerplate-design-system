import { SVGProps } from 'react';
import * as Svgs from "./index";
export declare function Svg({ name, alt, className, ...props }: SVGProps<SVGSVGElement> & {
    name: keyof typeof Svgs | string;
    className?: string;
    alt?: string;
}): import("react/jsx-runtime").JSX.Element;
