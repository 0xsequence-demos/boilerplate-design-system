import { useForm } from "./FormProvider";

export function FormErrors() {
  const { errors } = useForm();

  if (!errors || !errors.formErrors) return null;

  return (
    <div className="bg-red-600 text-white p-4 rounded-[9px]">
      {errors?.formErrors[0] || "Errors"}
    </div>
  );
}
