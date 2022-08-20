export default () => {
  const canvas = document.querySelector('.champion-title-canvas');
  const parent = document.querySelector('.details-container');
  const name = document.querySelector('[data-testid="overview:name"]');

  const parentCoords = parent.getBoundingClientRect();
  const nameCoords = name.getBoundingClientRect();

  const distanceLeft = parentCoords.width - nameCoords.width;
  const distanceRight = parentCoords.width + nameCoords.width;

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
    ctx.beginPath();

    ctx.moveTo(0, 0);
    ctx.lineTo(distanceLeft, 0);

    ctx.moveTo(distanceRight, 0);
    ctx.lineTo(widthDpi, 0);
    ctx.lineTo(widthDpi, heightDpi);
    ctx.lineTo(0, heightDpi);
    ctx.lineTo(0, 0);

    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.stroke();
  }
};
