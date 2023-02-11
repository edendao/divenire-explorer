/**
 * Adapted from https://github.com/domharrington/js-number-abbreviate
 */
const units = ["k", "m", "b", "t"];

export const toPrecision = (number: number, precision: number = 1): string =>
  number
    .toString()
    .replace(new RegExp(`(.+\\.\\d{${precision}})\\d+`), "$1")
    .replace(/(\.[1-9]*)0+$/, "$1")
    .replace(/\.$/, "");

export const fBalance = (number: number): string => {
  if (number < 1) return toPrecision(number, 3);
  if (number < 10 ** 2) return toPrecision(number, 2);
  if (number < 10 ** 4)
    return new Intl.NumberFormat().format(parseFloat(toPrecision(number, 1)));

  const decimalsDivisor = 10 ** 1; // 1 decimal place

  let result = String(number);

  for (let i = units.length - 1; i >= 0; i--) {
    const size = 10 ** ((i + 1) * 3);

    if (size <= number) {
      number = (number * decimalsDivisor) / size / decimalsDivisor;
      result = toPrecision(number, 1) + units[i];
      break;
    }
  }

  return result;
};
