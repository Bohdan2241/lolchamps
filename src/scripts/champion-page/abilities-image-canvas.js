export default () => {
  const parents = document.querySelectorAll('.abilities-image-container-canvas');

  parents.forEach((parent, i) => {
    const canvas = document.querySelectorAll('.abilities-image-canvas')[i];

    if (canvas && parent) {
      const dpi = window.devicePixelRatio;
      const widthDpi = (parent.offsetWidth + 2) * dpi;
      const heightDpi = (parent.offsetHeight + 2) * dpi;
      canvas.width = widthDpi;
      canvas.height = heightDpi;

      const width = parent.offsetWidth + 2;
      const height = parent.offsetHeight + 2;
      canvas.style.width = `${width + 2}px`;
      canvas.style.height = `${height + 2}px`;

      canvas.style.top = '-2px';
      canvas.style.left = '-2px';

      const ctx = canvas.getContext('2d');
      const angle = 40;
      ctx.beginPath();

      ctx.moveTo(0, 0);
      ctx.lineTo((widthDpi - angle), 0);
      ctx.lineTo(widthDpi, angle);
      ctx.lineTo(widthDpi, heightDpi);
      ctx.lineTo(0, heightDpi);
      ctx.lineTo(0, 0);

      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgb(208, 168, 92)';
      ctx.stroke();
    }
  });
};
