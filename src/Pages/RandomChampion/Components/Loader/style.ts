import styled, { keyframes } from 'styled-components';

import {
  COLOR_BACKGROUND_DARK_BLUE,
  COLOR_BACKGROUND_LIGHT_BLUE,
} from '../../../../assets/styles/theme';

export const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const fillProgress = keyframes`
  0% {
    stroke-dashoffset: 302;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

export const Circle = styled.svg`
  transform: rotate(-90deg);
`;

export const CircleBackground = styled.circle`
  fill: none;
  stroke: ${COLOR_BACKGROUND_DARK_BLUE};
  stroke-width: 10;
`;

export const CircleProgress = styled.circle`
  fill: none;
  stroke: ${COLOR_BACKGROUND_LIGHT_BLUE};
  stroke-width: 10;
  stroke-dasharray: 302;
  stroke-dashoffset: 302;
  animation: ${fillProgress} 2.5s linear forwards;
`;
