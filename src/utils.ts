export const isString = (value: string): boolean =>
  value.startsWith('"') && value.endsWith('"');
export const isBooleanTrue = (value: string): boolean => value === 'true';
export const isBooleanFalse = (value: string): boolean => value === 'false';
export const isNull = (value: string): boolean => value === 'null';
export const isNumber = (value: string): boolean => !isNaN(Number(value));
