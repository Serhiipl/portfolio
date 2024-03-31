export const validateString = (val: unknown, maxLength: number): boolean => {
  if (!val || typeof val !== "string" || val.length > maxLength) {
    return false;
  }
  return true;
};
