import { motion } from 'framer-motion';
import { ComponentPropsWithoutRef } from 'react';
interface ImageProps extends ComponentPropsWithoutRef<typeof motion.img> {
    disableAnimation?: boolean;
}
export declare const Image: (props: ImageProps) => import("react/jsx-runtime").JSX.Element;
export {};
