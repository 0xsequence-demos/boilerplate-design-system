import { Slot } from "../../slot/Slot";

export const Legend = ({
  children,
  asChild = false,
  ...props
}: {
  asChild?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <>
      <legend className="sr-only">{children}</legend>

      <Slot asChild={asChild} fallbackAs="div" aria-hidden="true" {...props}>
        {children}
      </Slot>
    </>
  );
};
