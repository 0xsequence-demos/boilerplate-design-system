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

export function applyMods<T>(mods: T): string {
  if (!mods) return undefined;

  return Object.keys(mods)
    .reduce((acc, key) => {
      if (mods[key]) {
        acc.push(`${key}-${mods[key]}`);
      }

      return acc;
    }, [])
    .join(" ");
}
