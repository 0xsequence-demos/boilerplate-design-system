export function getProps<T>(props): T {
  let subvariants: Record<string, string> = {};
  const restProps = {} as T;

  Object.keys(props)
    .filter((key) => key.startsWith("variant-"))
    .forEach((key) => {
      const [, subKey] = key.split("-");
      if (subKey) {
        subvariants[subKey] = props[key];
      }
    });

  Object.keys(props)
    .filter((key) => !key.startsWith("variant-") && key !== "subvariants")
    .forEach((key) => {
      restProps[key] = props[key];
    });

  if (props.subvariants) {
    subvariants = Object.assign(props.subvariants, subvariants);
  }

  return {
    ...(Object.keys(subvariants).length > 0 && { subvariants }),
    ...restProps,
  };
}
