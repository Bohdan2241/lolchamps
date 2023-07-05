import styled, { css, keyframes } from 'styled-components';

import { easing } from '../../utils/style/easing';

// From
const fromLeftTop = css`
  clip-path: polygon(0% 0%, 0% 0%, 0% 0%);
`;

const fromRightTop = css`
  clip-path: polygon(100% 0%, 100% 0%, 100% 0%);
`;

const fromRightBottom = css`
  clip-path: polygon(100% 100%, 100% 100%, 100% 100%);
`;

const fromLeftBottom = css`
  clip-path: polygon(0% 100%, 0% 100%, 0% 100%);
`;

// To
const toLeftTop = css`
  clip-path: polygon(100% 100%, -200% 100%, 100% -200%);
`;

const toRightTop = css`
  clip-path: polygon(0% 100%, 0% -100%, 200% 100%);
`;

const toRightBottom = css`
  clip-path: polygon(0% 0%, 200% 0%, 0% 200%);
`;

const toLeftBottom = css`
  clip-path: polygon(100% 0%, 100% 200%, -100% 0%);
`;

// SE
const animateShowSE = keyframes`
  from {
    ${fromLeftTop}
  }
  to {
    ${toRightBottom}
  }
`;

const animateHideSE = keyframes`
  from {
    ${toLeftTop}
  }
  to {
    ${fromRightBottom}
  }
`;

const showSE = css`
  ${toRightBottom}
  animation-name: ${animateShowSE};
`;

const hideSE = css`
  ${fromRightBottom}
  animation-name: ${animateHideSE};
`;

// NE
const animateShowNE = keyframes`
  from {
    ${fromLeftBottom}
  }
  to {
    ${toRightTop}
  }
`;

const animateHideNE = keyframes`
  from {
    ${toLeftBottom}
  }
  to {
    ${fromRightTop}
  }
`;

const showNE = css`
  ${toRightTop}
  animation-name: ${animateShowNE};
`;

const hideNE = css`
  ${fromRightTop}
  animation-name: ${animateHideNE};
`;

// NW
const animateShowNW = keyframes`
  from {
    ${fromRightBottom}
  }
  to {
    ${toLeftTop}
  }
`;

const animateHideNW = keyframes`
  from {
    ${toRightBottom}
  }
  to {
    ${fromLeftTop}
  }
`;

const showNW = css`
  ${toLeftTop}
  animation-name: ${animateShowNW};
`;

const hideNW = css`
  ${fromLeftTop}
  animation-name: ${animateHideNW};
`;

// SW
const animateShowSW = keyframes`
  from {
    ${fromRightTop}
  }
  to {
    ${toLeftBottom}
  }
`;

const animateHideSW = keyframes`
  from {
    ${toRightTop}
  }
  to {
    ${fromLeftBottom}
  }
`;

const showSW = css`
  ${toLeftBottom}
  animation-name: ${animateShowSW};
`;

const hideSW = css`
  ${fromLeftBottom}
  animation-name: ${animateHideSW};
`;

export const RevealWrapper = styled.div`
  &.absolute {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &.inline {
    display: inline-block;
  }

  /* Clip to be hidden by default */
  clip-path: polygon(0% 0%, 0% 0%, 0% 0%);

  /* Manage presentation state for animations with delays */
  animation-fill-mode: backwards;

  /* Overridden by props */
  animation-duration: 1000ms;
  animation-timing-function: ease-in-out;
  animation-delay: 0ms;

  &.show-se {
    ${showSE}
  }

  &.hide-se {
    ${hideSE}
  }

  &.show-ne {
    ${showNE}
  }

  &.hide-ne {
    ${hideNE}
  }

  &.show-nw {
    ${showNW}
  }

  &.hide-nw {
    ${hideNW}
  }

  &.show-sw {
    ${showSW}
  }

  &.hide-sw {
    ${hideSW}
  }

  html.is-ms &,
  html.is-safari &.safari-simplified {
    clip-path: none !important;
    opacity: 0;
    animation: none !important;

    &.show-se,
    &.show-ne,
    &.show-nw,
    &.show-sw {
      opacity: 1;
      transition-delay: 0s;
    }
  }

  html.is-ms & {
    transition: opacity 0.6s 0s ${easing.easeOutCubic};
  }

  html.is-safari &.safari-simplified {
    transition: opacity 0.6s 0s ${easing.easeOutCubic};
  }
`;
