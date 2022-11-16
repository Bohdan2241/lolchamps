/* eslint-disable no-param-reassign */
const init = (lineLeft, lineRight, container, header) => {
  const containerCoords = container.getBoundingClientRect();
  const headerCoords = header.getBoundingClientRect();

  const distanceLeft = Math.floor((containerCoords.width - headerCoords.width) / 2);
  const distanceRight = Math.floor((containerCoords.width + headerCoords.width) / 2);

  lineLeft.style.width = `${distanceLeft}px`;
  lineRight.style.left = `${distanceRight}px`;
};

const resizeWatcher = (lineLeft, lineRight, container, header) => {
  window.addEventListener('resize', () => {
    const containerCoords = container.getBoundingClientRect();
    const headerCoords = header.getBoundingClientRect();

    const distanceLeft = Math.floor((containerCoords.width - headerCoords.width) / 2);
    const distanceRight = Math.floor((containerCoords.width + headerCoords.width) / 2);

    lineLeft.style.width = `${distanceLeft}px`;
    lineRight.style.left = `${distanceRight}px`;
  });
};

export default () => {
  const lineLeft = document.querySelector('.wrapper-details .line-left');
  const lineRight = document.querySelector('.wrapper-details .line-right');
  const container = document.querySelector('.wrapper-details');
  const header = document.querySelector('[data-testid="overview:name"]');

  init(lineLeft, lineRight, container, header);
  resizeWatcher(lineLeft, lineRight, container, header);
};
