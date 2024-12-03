import { nameToLabel } from "../../helpers/name-to-label";
import { Field, Label } from "../action/components";
import { Select, type SelectProps } from "../select/Select";

export function InputSelect(
  props: SelectProps & { name: string; label?: string }
) {
  const { name, children, options, defaultValue, ...restProps } = props;

  const label = props.label || nameToLabel(name);

  return (
    <Field name={name}>
      {children ? (
        children
      ) : (
        <>
          <Label>{label}</Label>
          <Select
            defaultValue={defaultValue}
            options={options}
            {...restProps}
          />
        </>
      )}
    </Field>
  );
}
