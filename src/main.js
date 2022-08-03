const canvas = document.querySelector('.main-nav-canvas');
const parent = document.querySelector('.main-nav-inner');
const ctx = canvas.getContext('2d');
const dpi = window.devicePixelRatio;

const widthDpi = parent.offsetWidth * dpi;
const heightDpi = parent.offsetHeight * dpi;
const width = parent.offsetWidth;
const height = parent.offsetHeight;
canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;
canvas.width = widthDpi;
canvas.height = heightDpi;

// canvas.width = width * 2;
// canvas.height = height * 2;
// canvas.aspectRatio = ('auto' (width / height));
// canvas.addEventListener('mousemove', (event) => {
//   console.log(event.offsetX, event.offsetY);
// });
// console.log(widthDpi, heightDpi);
// ctx.scale(2, 2);
ctx.beginPath();

ctx.moveTo(30, 0);
ctx.lineTo(widthDpi, 0);

ctx.moveTo(widthDpi, 0);
ctx.lineTo(widthDpi, (heightDpi - 30));

ctx.moveTo(widthDpi, (heightDpi - 30));
ctx.lineTo((widthDpi - 30), heightDpi);

ctx.moveTo(0, heightDpi);
ctx.lineTo((widthDpi - 30), heightDpi);

ctx.moveTo(0, 30);
ctx.lineTo(0, heightDpi);

ctx.moveTo(0, 30);
ctx.lineTo(30, 0);

ctx.lineWidth = 3;
ctx.strokeStyle = 'rgb(193, 193, 193)';
ctx.stroke();
