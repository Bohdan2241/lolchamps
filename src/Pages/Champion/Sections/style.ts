import styled, { keyframes } from 'styled-components';

const RevealWrapperNameAnimation = keyframes`
  0% {
    clip-path: polygon(0% 0%, 0% 0%, 0% 0%);
  }
  100% {
    clip-path: polygon(0% 0%, 200% 0%, 0% 200%);
  }
`;

export const RevealWrapperName = styled.div`
  display: inline-block;
  clip-path: polygon(0% 0%, 200% 0%, 0% 200%);
  animation-name: ${RevealWrapperNameAnimation};
  animation-duration: 2000ms;
  animation-delay: 500ms;
  animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  animation-fill-mode: backwards;
`;

export const Title = styled.strong`
  display: block;
  font-size: 120px;
  line-height: 0.85;
  font-weight: 800;
  letter-spacing: 0.03em;
`;

const RevealWrapperTitleAnimation = keyframes`
  0% {
    clip-path: polygon(100% 100%, 100% 100%, 100% 100%);
  }
  100% {
    clip-path: polygon(100% 100%, -200% 100%, 100% -200%);
  }
`;

export const RevealWrapperTitle = styled.div`
  display: inline-block;
  clip-path: polygon(100% 100%, -200% 100%, 100% -200%);
  animation-name: ${RevealWrapperTitleAnimation};
  animation-duration: 2800ms;
  animation-delay: 600ms;
  animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  animation-fill-mode: backwards;
`;

export const Intro = styled.span`
  display: block;
  font-size: 1.5rem;
  line-height: 1;
  font-weight: 600;
  letter-spacing: 0.1em;
`;

export const Heading = styled.h1`
  text-transform: uppercase;
  font-style: italic;
  font-weight: normal;
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: rgb(255, 255, 255);
`;

export const Name = styled.div`
  position: relative;
  top: -5rem;
  margin-bottom: -5rem;
`;

export const Dock = styled.div`
  position: relative;
  margin: -5.625rem 3.75rem 0px;
`;

export const MainImageAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const MainImage = styled.img`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  animation: 2000ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms 1 normal both
    running ${MainImageAnimation};
  object-fit: cover;
  object-position: center 20%;
`;

export const ForegroundAsset = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-bottom: 59.01%;
  mask-image: linear-gradient(rgb(0, 0, 0) 65%, rgba(0, 0, 0, 0) 98%);
  -webkit-mask-image: linear-gradient(rgb(0, 0, 0) 65%, rgba(0, 0, 0, 0) 98%);
`;

export const SectionInner = styled.div`
  max-width: 1335px;
  padding: 0px 3.75rem;
  margin: 0px auto;
`;

export const BackgroundImageAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: .3;
  }
`;

export const BackgroundImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  filter: blur(8px);
  animation: 3000ms cubic-bezier(0.215, 0.61, 0.355, 1) 500ms 1 normal both
    running ${BackgroundImageAnimation};
  object-fit: cover;
  object-position: center 20%;
`;

export const WrapBackgroundImage = styled.div`
  position: absolute;
  left: -5%;
  top: -5%;
  width: 110%;
  height: 110%;

  &::after {
    content: '';
    position: absolute;
    left: 0px;
    bottom: -10%;
    width: 100%;
    height: 50%;
    background: linear-gradient(transparent, rgb(0, 9, 19) 70%);
  }
`;

export const BackgroundAsset = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 80vh;
  max-height: 800px;
  overflow: hidden;
`;

export const OverviewSection = styled.section`
  position: relative;
  min-height: 75vh;
  padding: 30px 0px 75px;
`;
