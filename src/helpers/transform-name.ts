export function transformName(
  name: string,
  options?: { prefix?: string; suffix?: string }
): string {
  let modifiedName = name;

  if (typeof modifiedName !== "string") {
    return null;
  }

  // Remove the prefix if provided
  if (options?.prefix && modifiedName.startsWith(options.prefix)) {
    modifiedName = modifiedName.slice(options.prefix.length);
  }

  // Remove the suffix if provided
  if (options?.suffix && modifiedName.endsWith(options.suffix)) {
    modifiedName = modifiedName.slice(0, -options.suffix.length);
  }

  // Convert to camelCase
  return modifiedName.charAt(0).toLowerCase() + modifiedName.slice(1);
}
