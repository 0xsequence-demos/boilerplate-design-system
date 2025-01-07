import { Slot } from "../slot/Slot";
import { FieldProvider } from "./FieldProvider";
import { useForm } from "../form/FormProvider";

export function Field({
  name,
  children,
  asChild = false,
  className = "flex flex-col items-start gap-1",
}: {
  name: string;
  children?: React.ReactNode;
  asChild?: boolean;
  className?: string;
}) {
  const { errors } = useForm();
  const error = errors?.fieldErrors?.[name];

  return (
    <FieldProvider value={{ name, error }}>
      <Slot asChild={asChild} fallbackAs="div" className={className}>
        <>{children}</>
      </Slot>
    </FieldProvider>
  );
}
