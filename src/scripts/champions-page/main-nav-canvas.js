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
    const lineWidth = 3;
    const strokeStyle = 'rgb(193, 193, 193)';

    const speedSlow = 5;
    const speedMedium = 10;
    const speepFast = 100;

    let stepX1 = 0;
    const animation1 = async () => {
      const animationID = requestAnimationFrame(animation1);
      stepX1 = stepX1 <= widthDpi ? stepX1 + speepFast : widthDpi;
      ctx.beginPath();

      ctx.moveTo(angle, 0);
      ctx.lineTo(stepX1 + 1, 0);

      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = strokeStyle;
      ctx.stroke();
      if (stepX1 >= widthDpi) {
        cancelAnimationFrame(animationID);
        console.log('done 1');
      }
    };

    let stepY2 = 0;
    const animation2 = async () => {
      const animationID = requestAnimationFrame(animation2);
      stepY2 = stepY2 <= (heightDpi - angle) ? stepY2 + speedMedium : (heightDpi - angle);
      ctx.beginPath();

      ctx.moveTo(widthDpi, 0);
      ctx.lineTo(widthDpi, (stepY2 + 1));

      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = strokeStyle;
      ctx.stroke();
      if (stepY2 >= (heightDpi - angle)) {
        cancelAnimationFrame(animationID);
        console.log('done 2');
      }
    };

    let stepX3 = 0;
    let stepY3 = 0;
    const animation3 = async () => {
      const animationID = requestAnimationFrame(animation3);
      stepX3 = stepX3 <= angle ? stepX3 + speedSlow : angle;
      stepY3 = stepY3 < heightDpi ? stepY3 + speedSlow : heightDpi;
      ctx.beginPath();

      ctx.moveTo(widthDpi, heightDpi - angle);
      ctx.lineTo(widthDpi - stepX3, (heightDpi - angle) + stepX3);

      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = strokeStyle;
      ctx.stroke();
      if (stepX3 >= angle && stepY3 >= angle) {
        cancelAnimationFrame(animationID);
        console.log('done 3');
      }
    };

    let stepX4 = 0;
    const animation4 = async () => {
      const animationID = requestAnimationFrame(animation4);
      stepX4 = stepX4 >= -(widthDpi) ? stepX4 + speepFast : -(widthDpi);
      ctx.beginPath();

      ctx.moveTo(widthDpi - angle, heightDpi);
      ctx.lineTo((widthDpi - angle) - stepX4, heightDpi);

      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = strokeStyle;
      ctx.stroke();
      if (stepX4 > widthDpi) {
        cancelAnimationFrame(animationID);
        console.log('done 4');
      }
    };

    let stepY5 = 0;
    const animation5 = async () => {
      const animationID = requestAnimationFrame(animation5);
      stepY5 = stepY5 <= (heightDpi - angle) ? stepY5 + speedMedium : (heightDpi - angle);
      ctx.beginPath();

      ctx.moveTo(0, heightDpi);
      ctx.lineTo(0, heightDpi - stepY5);

      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = strokeStyle;
      ctx.stroke();
      if (stepY5 >= (heightDpi - angle)) {
        cancelAnimationFrame(animationID);
        console.log('done 5');
      }
    };

    let stepX6 = 0;
    let stepY6 = 0;
    const animation6 = async () => {
      const animationID = requestAnimationFrame(animation6);
      stepX6 = stepX6 <= angle ? stepX6 + speedSlow : angle;
      stepY6 = stepY6 <= angle ? stepY6 + speedSlow : angle;
      ctx.beginPath();

      ctx.moveTo(0, angle);
      ctx.lineTo(stepX6 + 1, angle - stepY6);

      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = strokeStyle;
      ctx.stroke();
      if (stepX6 >= angle && stepY6 >= angle) {
        cancelAnimationFrame(animationID);
        console.log('done 6');
      }
    };

    animation1();
    animation2();
    animation3();
    animation4();
    animation5();
    animation6();
  }
};
