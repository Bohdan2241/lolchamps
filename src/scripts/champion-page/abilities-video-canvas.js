export default () => {
  const canvas = document.querySelector('.abilities-video-canvas');
  const parent = document.querySelector('.abilities-video-container-canvas');

  if (canvas && parent) {
    const subtractWidth = 32;
    const additionalHeight = 32;

    const dpi = window.devicePixelRatio;
    const widthDpi = (parent.offsetWidth - subtractWidth) * dpi;
    const heightDpi = (parent.offsetHeight + additionalHeight) * dpi;
    canvas.width = widthDpi;
    canvas.height = heightDpi;

    const width = parent.offsetWidth - subtractWidth;
    const height = parent.offsetHeight + additionalHeight;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    const angle = 90;
    ctx.beginPath();

    ctx.moveTo(0, 0);
    ctx.lineTo((widthDpi - angle), 0);
    ctx.lineTo(widthDpi, angle);
    ctx.lineTo(widthDpi, heightDpi);
    ctx.lineTo(0, heightDpi);
    ctx.lineTo(0, 0);

    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgb(193, 193, 193)';
    ctx.stroke();
  }
};
