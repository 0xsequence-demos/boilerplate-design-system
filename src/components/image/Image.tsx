import { motion } from "motion/react";
import { SyntheticEvent, useState, ComponentPropsWithoutRef } from "react";

interface ImageProps extends ComponentPropsWithoutRef<typeof motion.img> {
  disableAnimation?: boolean;
}

export const Image = (props: ImageProps) => {
  const { disableAnimation = false, onLoad, ...rest } = props;
  const [isImageLoaded, setImageLoaded] = useState(false);

  const handleLoad = (ev: SyntheticEvent<HTMLImageElement, Event>) => {
    setImageLoaded(true);
    onLoad?.(ev);
  };

  return (
    <motion.img
      initial={disableAnimation ? undefined : { opacity: 0 }}
      animate={
        disableAnimation ? undefined : { opacity: isImageLoaded ? 1 : 0 }
      }
      transition={{ duration: 0.2 }}
      onLoad={disableAnimation ? undefined : handleLoad}
      {...rest}
    />
  );
};
