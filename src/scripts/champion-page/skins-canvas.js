/* eslint-disable no-unused-vars */
export default () => {
  // const canvas = document.querySelector('.skins-carousel-canvas');
  // const parent = document.querySelector('.skins-carousel-container-canvas');

  // if (canvas && parent) {
  //   const dpi = window.devicePixelRatio;
  //   const widthDpi = parent.offsetWidth * dpi;
  //   const heightDpi = parent.offsetHeight * dpi;
  //   canvas.width = widthDpi;
  //   canvas.height = heightDpi;

  //   const width = parent.offsetWidth;
  //   const height = parent.offsetHeight;
  //   canvas.style.width = `${width}px`;
  //   canvas.style.height = `${height}px`;

  //   const ctx = canvas.getContext('2d');
  //   const angle = 25;
  //   const lineWidth = 3;
  //   const strokeStyle = 'rgb(193, 193, 193)';

  //   const speedSlow = 5;
  //   const speedMedium = 10;
  //   const speepFast = 200;

  //   let stepX1 = 0;
  //   const animation1 = () => {
  //     const animationID = requestAnimationFrame(animation1);
  //     stepX1 = stepX1 <= widthDpi ? stepX1 + speepFast : widthDpi;
  //     ctx.beginPath();

  //     ctx.moveTo(angle, 0);
  //     ctx.lineTo(stepX1 + 1, 0);

  //     ctx.lineWidth = lineWidth;
  //     ctx.strokeStyle = strokeStyle;
  //     ctx.stroke();
  //     if (stepX1 >= widthDpi) {
  //       cancelAnimationFrame(animationID);
  //       console.log('done 1');
  //     }
  //   };

  //   let stepY2 = 0;
  //   const animation2 = () => {
  //     const animationID = requestAnimationFrame(animation2);
  //     stepY2 = stepY2 <= (heightDpi - angle) ? stepY2 + speedMedium : (heightDpi - angle);
  //     ctx.beginPath();

  //     ctx.moveTo(widthDpi, 0);
  //     if (stepY2 <= (heightDpi - angle)) {
  //       ctx.lineTo(widthDpi, (stepY2 + 1));
  //     } else {
  //       ctx.lineTo(widthDpi, (heightDpi - angle));
  //     }

  //     ctx.lineWidth = lineWidth;
  //     ctx.strokeStyle = strokeStyle;
  //     ctx.stroke();
  //     if (stepY2 >= (heightDpi - angle)) {
  //       cancelAnimationFrame(animationID);
  //       console.log('done 2');
  //     }
  //   };

  //   let stepX3 = 0;
  //   let stepY3 = 0;
  //   const animation3 = () => {
  //     const animationID = requestAnimationFrame(animation3);
  //     stepX3 = stepX3 <= angle ? stepX3 + speedSlow : angle;
  //     stepY3 = stepY3 < heightDpi ? stepY3 + speedSlow : heightDpi;
  //     ctx.beginPath();

  //     ctx.moveTo(widthDpi, heightDpi - angle);
  //     ctx.lineTo(widthDpi - stepX3, (heightDpi - angle) + stepX3);

  //     ctx.lineWidth = lineWidth;
  //     ctx.strokeStyle = strokeStyle;
  //     ctx.stroke();
  //     if (stepX3 >= angle && stepY3 >= angle) {
  //       cancelAnimationFrame(animationID);
  //       console.log('done 3');
  //     }
  //   };

  //   let stepX4 = 0;
  //   const animation4 = () => {
  //     const animationID = requestAnimationFrame(animation4);
  //     stepX4 = stepX4 >= -(widthDpi) ? stepX4 + speepFast : -(widthDpi);
  //     ctx.beginPath();

  //     ctx.moveTo(widthDpi - angle, heightDpi);
  //     ctx.lineTo((widthDpi - angle) - stepX4, heightDpi);

  //     ctx.lineWidth = lineWidth;
  //     ctx.strokeStyle = strokeStyle;
  //     ctx.stroke();
  //     if (stepX4 > widthDpi) {
  //       cancelAnimationFrame(animationID);
  //       console.log('done 4');
  //     }
  //   };

  //   setTimeout(() => {
  //     animation1();
  //     setTimeout(() => {
  //       animation2();
  //       setTimeout(() => {
  //         animation3();
  //         setTimeout(() => {
  //           animation4();
  //         }, 1);
  //       }, 20);
  //     }, 200);
  //   }, 1);
  // }
};
