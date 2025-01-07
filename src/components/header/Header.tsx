import { Svg } from "../svg/Svg";

export function Header({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 items-center  text-center">
      <Svg
        name="SequenceBoilerplateLogo"
        alt="Sequence Boilerplate"
        className="mb-2"
        width="276"
      />

      <h1 className="text-32 sm:text-40 font-bold leading-tight">{name}</h1>
      <p className="text-14 sm:font-bold">{description}</p>
    </div>
  );
}
