import { Field } from "../field/Field";
import { Label } from "../label/Label";
import { Input } from "../input/Input";
import { nameToLabel } from "../../helpers/name-to-label";
import { FieldError } from "../field/FieldError";

type InputTextProps = {
  children?: React.ReactNode;
  name: string;
  label?: string;
};

export function InputText(props: InputTextProps) {
  const { name, children } = props;

  const label = props.label || nameToLabel(name);

  return (
    <Field name={name}>
      {children ? (
        children
      ) : (
        <>
          <Label>{label}</Label>
          <Input variant-width="full" />
          <FieldError />
        </>
      )}
    </Field>
  );
}
