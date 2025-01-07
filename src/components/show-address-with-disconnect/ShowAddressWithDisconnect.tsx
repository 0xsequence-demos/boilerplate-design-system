import { Field } from "../field/Field";
import { Label } from "../label/Label";
import { SegmentedInput } from "../segmented-input/SegmentedInput";
import { Input } from "../input/Input";
import { Button } from "../button/Button";
import { Svg } from "../svg/Svg";
import { nameToLabel } from "../../helpers/name-to-label";

type ShowAddressWithDisconnectProps = {
  address?: string;
  onDisconnect?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name?: string;
  label?: string;
};

export function ShowAddressWithDisconnect(
  props: ShowAddressWithDisconnectProps,
) {
  const { address, onDisconnect } = props;

  const name = props.name || "wallet-address";
  const label = props.label || nameToLabel(name);

  function handleDisconnect(event) {
    if (onDisconnect && typeof onDisconnect === "function") {
      onDisconnect(event);
    }
  }

  return (
    <Field name={name}>
      <Label>{label} </Label>
      <SegmentedInput subvariants={{ width: "full" }}>
        <SegmentedInput.Segment subvariants={{ pointer: "none" }}>
          <Svg name="Wallet" width="20" />
        </SegmentedInput.Segment>

        <Input
          type="text"
          defaultValue={address ?? ""}
          variant="transparent"
          subvariants={{ width: "full" }}
          readOnly
        />

        <SegmentedInput.Segment>
          <Button
            variant="tiny"
            className="self-center"
            onClick={handleDisconnect}
          >
            <Svg name="Signout" width="16" />
            Disconnect
          </Button>
        </SegmentedInput.Segment>
      </SegmentedInput>
    </Field>
  );
}
