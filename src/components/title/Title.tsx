import { Svg } from "../svg/Svg";

export function Title({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <Svg
        name="SequenceBoilerplateLogo"
        alt="Sequence Boilerplate"
        className="mb-2"
      />

      <h1 className="text-40 font-bold">{name}</h1>
      <p className="text-14 font-bold">{description}</p>
    </div>
  );
}
