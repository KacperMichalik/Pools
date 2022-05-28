export const formatValue = (value: string) => {
  const dotIndex = value.indexOf(".");
  const formatedValue = value.substring(0, dotIndex + 4);
  return formatedValue;
};
