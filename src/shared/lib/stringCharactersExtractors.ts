const extractAlphabeticChars = (string: string): string => {
  return string.replace(/[^A-Za-z]/g, '');
};

const extractNumericChars = (string: string): number => {
  return Number(string.replace(/[^0-9]/g, ''));
};

export { extractAlphabeticChars, extractNumericChars };
