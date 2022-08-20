export default () => {
  const canvas = document.querySelector('.main-nav-canvas');
  const parent = document.querySelector('.main-nav-inner');

  if (canvas && parent) {
    const dpi = window.devicePixelRatio;
    const widthDpi = parent.offsetWidth * dpi;
    const heightDpi = parent.offsetHeight * dpi;
    canvas.width = widthDpi;
    canvas.height = heightDpi;

    const width = parent.offsetWidth;
    const height = parent.offsetHeight;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    const angle = 25;
    ctx.beginPath();

    ctx.moveTo(angle, 0);
    ctx.lineTo(widthDpi, 0);

    ctx.lineTo(widthDpi, (heightDpi - angle));

    ctx.lineTo((widthDpi - angle), heightDpi);

    ctx.lineTo(0, heightDpi);

    ctx.lineTo(0, angle);

    ctx.lineTo(angle, 0);

    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgb(193, 193, 193)';
    ctx.stroke();
  }
};
