export default () => {
  const canvas = document.querySelector('.champions-button-canvas');
  const parent = document.querySelector('.champions-button-container');

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

    ctx.lineWidth = 4;
    ctx.strokeStyle = 'rgb(12, 186, 214)';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fill();
    ctx.stroke();

    parent.addEventListener('mouseenter', () => {
      ctx.clearRect(0, 0, widthDpi, heightDpi);
      ctx.beginPath();

      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.fill();
      ctx.fillRect(0, 0, widthDpi, heightDpi);

      ctx.lineWidth = 7;
      ctx.strokeStyle = 'rgb(12, 186, 214)';
      ctx.strokeRect(0, 0, widthDpi, heightDpi);
    });
    parent.addEventListener('mouseleave', () => {
      ctx.clearRect(0, 0, widthDpi, heightDpi);
      ctx.beginPath();

      ctx.moveTo(angle, 0);
      ctx.lineTo(widthDpi, 0);

      ctx.lineTo(widthDpi, (heightDpi - angle));

      ctx.lineTo((widthDpi - angle), heightDpi);

      ctx.lineTo(0, heightDpi);

      ctx.lineTo(0, angle);

      ctx.lineTo(angle, 0);

      ctx.lineWidth = 5;
      ctx.strokeStyle = 'rgb(12, 186, 214)';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.fill();
      ctx.stroke();
    });
  }
};
