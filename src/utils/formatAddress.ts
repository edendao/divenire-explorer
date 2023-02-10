export const fAddress = (
  address: string,
  leadingChars = 4,
  trailingChars = 4,
) => {
  if (address.length < leadingChars + trailingChars) {
    return address;
  }

  const leading = address.substring(0, leadingChars);
  const trailing = address.substring(address.length - trailingChars);
  return `${leading}\u2026${trailing}`;
};
