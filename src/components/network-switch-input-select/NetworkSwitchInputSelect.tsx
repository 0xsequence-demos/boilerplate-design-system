import { InputSelect } from "../input-select/InputSelect";

export function NetworkSwitchInputSelect({ chainId }: { chainId: string }) {
  return (
    <InputSelect name="network" defaultValue={chainId} options={[]} />
  );
}
