export function shortAddress(address?: `0x${string}`) {
  if (!address || address.length < 8) return address; // Ensure valid length
  return `${address.slice(0, 5)}...${address.slice(-3)}`;
}

export function mediumAddress(address?: `0x${string}`) {
  if (!address || address.length < 8) return address; // Ensure valid length
  return `${address.slice(0, 12)}...${address.slice(-6)}`;
}
