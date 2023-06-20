/*
  Convert pixels to rem units
*/

const BASE = 16; // Base font-size as set on <html>, default is 16px in all browsers

const rem = (px: number) => {
  return `${px / BASE}rem`;
};

export default rem;
