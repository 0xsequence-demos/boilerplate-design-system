import { useForm } from "./FormProvider";

export function FormErrors() {
  const { errors } = useForm();

  if (!errors || !errors.formErrors) return null;

  return (
    <div className="bg-red-600 text-white px-4 py-2 rounded-[0.5rem] text-15">
      {errors?.formErrors[0] || "There was a problem submitting your form"}
    </div>
  );
}
