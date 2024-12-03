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

export function applySubvariants<T>(subvariants: T): string {
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

export function defineComponent(
  name: string,
  variant: string,
  subvariants: Record<string, string>
): Record<string, string> {
  const defaultVariant = import.meta.env.VITE_DEFAULT_VARIANT || "initial";
  const disableVariant =
    import.meta.env.VITE_DISABLE_VARIANT === "true" ? true : false;
  const disableSubvariants =
    import.meta.env.VITE_DISABLE_SUBVARIANTS === "true" ? true : false;

  return {
    "data-component": name,
    "data-variant": disableVariant ? undefined : variant || defaultVariant,
    "data-subvariants": disableSubvariants
      ? undefined
      : applySubvariants(subvariants),
  };
}
