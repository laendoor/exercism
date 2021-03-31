
export const isPangram = text => {
  const onlyAscii = text.toLowerCase().replaceAll(/[^a-z]/g, '');
  return new Set(onlyAscii).size === 26;
};
