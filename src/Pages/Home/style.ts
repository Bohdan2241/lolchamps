import styled, { keyframes } from 'styled-components';

import { COLOR_BACKGROUND_DARK } from '../../assets/styles/theme';
import { easing } from '../../utils/style';

const simpleFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ForegroundVideoWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  background: ${COLOR_BACKGROUND_DARK};
`;

export const ForegroundVideo = styled.div`
  width: 100%;
  height: 100%;
`;

export const LogoImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;

  display: block;
  width: 100%;
  height: 100%;
  margin: 0;

  animation: ${simpleFadeIn} backwards 1s 0.5s ${easing.easeOutCubic};
`;

export const ForegroundInner = styled.div`
  width: 100%;
`;

export const ForegroundRow = styled.div`
  width: 100%;
  /* margin-top: 0.625rem; */
  text-align: center;
`;

export const Logo = styled.div`
  display: inline-block;
  position: relative;
  width: 40vw;
  height: calc(17.6333vw);
  max-width: 37.5rem;
  max-height: 16.5312rem;
`;

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 84px);
`;
