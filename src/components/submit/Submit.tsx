import { Button } from "../button/Button";

type SubmitProps = {
  label: string;
} & React.ComponentProps<"button">;

export function Submit(props: SubmitProps) {
  const { label, ...restProps } = props;

  return (
    <Button
      type="submit"
      variant="primary"
      subvariants={{ flex: "start" }}
      {...restProps}
    >
      {label}
    </Button>
  );
}
