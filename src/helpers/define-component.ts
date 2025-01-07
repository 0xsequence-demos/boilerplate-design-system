import { VariantOptions } from "../components/types";

export function applyVariants<T>(variants: T): string {
  if (typeof variants === "string") {
    return variants;
  }

  return Object.keys(variants)
    .reduce((acc, key) => {
      if (variants[key]) {
        if (key === "base") {
          acc.unshift(variants[key]);
        } else {
          acc.push(`${key}-${variants[key]}`);
        }
      }

      return acc;
    }, [])
    .join(" ");
}

export function convertSubvariantsToString<T>(subvariants: T): string {
  if (!subvariants) return undefined;

  return Object.keys(subvariants)
    .reduce((acc, key) => {
      if (subvariants[key]) {
        acc.push(`${key}-${subvariants[key]}`);
      }

      return acc;
    }, [])
    .join(" ");
}

export function extractSubvariantsFromAttributes<T>(
  props
): Record<string, string> {
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

  return Object.keys(subvariants).length > 0 ? subvariants : {};
}

// export function defineComponent(
//   name: string,
//   variant: string,
//   subvariants: Record<string, string>
// ): Record<string, string> {
//   const defaultVariant = import.meta.env.VITE_DEFAULT_VARIANT || "initial";
//   const disableVariant =
//     import.meta.env.VITE_DISABLE_VARIANT === "true" ? true : false;
//   const disableSubvariants =
//     import.meta.env.VITE_DISABLE_SUBVARIANTS === "true" ? true : false;

//   return {
//     "data-component": name,
//     "data-variant": disableVariant ? undefined : variant || defaultVariant,
//     "data-subvariants": disableSubvariants
//       ? undefined
//       : convertSubvariantsToString(subvariants),
//   };
// }

export function defineComponentFromProps<
  T extends { variant?: VariantOptions<string> }
>(name: string, props: T): T & Record<string, string> {
  const defaultVariant = import.meta.env.VITE_DEFAULT_VARIANT || "initial";
  const disableVariant =
    import.meta.env.VITE_DISABLE_VARIANT === "true" ? true : false;
  const disableSubvariants =
    import.meta.env.VITE_DISABLE_SUBVARIANTS === "true" ? true : false;

  const subvariants = extractSubvariantsFromAttributes(props);

  const restProps = { ...props };

  // Remove the props from the returned restProps
  delete restProps.variant;
  Object.keys(subvariants).forEach((key) => {
    delete restProps[`variant-${key}`];
  });

  return {
    "data-component": name,
    "data-variant": disableVariant
      ? undefined
      : props?.variant || defaultVariant,
    "data-subvariants": disableSubvariants
      ? undefined
      : convertSubvariantsToString(subvariants),
    ...restProps,
  };
}
