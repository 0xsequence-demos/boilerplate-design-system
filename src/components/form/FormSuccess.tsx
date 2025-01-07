import { useForm } from "./FormProvider";

export function FormSuccess({ message = "Success!" }: { message?: string }) {
  const data = useForm();

  if (!data || !data.success) return null;

  return (
    <div className="bg-green-600 text-white px-6 py-4 rounded-[9px] text-18">
      {message}
    </div>
  );
}

export function VisibilityOnSuccess({
  children,
  visible = false,
}: {
  children: React.ReactNode;
  visible?: boolean;
}) {
  const data = useForm();

  if (visible === false && data && data?.success) return null;

  return <>{children}</>;
}
