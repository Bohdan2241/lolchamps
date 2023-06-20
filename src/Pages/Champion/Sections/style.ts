import styled, { keyframes } from 'styled-components';

export const ItemDifficultyIcon = styled.span`
  display: inline-block;
  box-sizing: content-box;
  width: 30.6667%;
  height: 100%;
  padding-right: 4%;
  background-color: rgb(8, 215, 247);
  background-clip: content-box;
  transform: skewX(-40deg);

  &:last-child {
    padding-right: 0;
  }

  &.full {
    opacity: 1;
  }

  &.empty {
    opacity: 0.2;
  }
`;

export const ContainerDifficultyIcon = styled.span`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 0px 8% 0px 5%;
  white-space: nowrap;
`;

export const WrapDifficultyIcon = styled.span`
  display: block;
  width: 50px;
  height: 10px;
  position: absolute;
  top: 20px;
`;

export const ChampionsButtonContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 30px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-align: left;
`;

export const ChampionsButton = styled.a`
  position: relative;
  display: block;
  height: 100%;
  color: #fff;
  padding: 10px 20px;
  background-color: rgba(0, 9, 19, 0.5);
  border: 1px solid rgb(8, 215, 247);
`;

export const ChampionsButtonText = styled.span`
  vertical-align: middle;
  padding-right: 10px;
`;

export const ChampionsButtonIcon = styled.svg`
  fill: #fff;
  height: 14px;
  width: 14px;
  vertical-align: middle;
`;

const Line = styled.div`
  position: absolute;
  top: 0;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const StartLine = styled(Line)`
  left: 0;
`;

export const EndLine = styled(Line)`
  right: 0;
`;

export const Container = styled.div`
  position: absolute;
  inset: 1px;
  border-color: rgba(255, 255, 255, 0.2);
  border-width: 1px;
  border-top-width: 0;
  border-style: solid;
`;

export const Text = styled.p`
  max-width: 100%;
  margin-top: 0px;
  color: rgb(255, 255, 255);
  font-size: 0.875rem;
  line-height: 1.28571;
  letter-spacing: 0.08em;

  & button {
    padding: 0px;
    border: 0px;
    background-color: transparent;
    color: rgb(208, 168, 92);
    font-size: 0.625rem;
    text-transform: uppercase;
  }
`;

const DescAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Desc = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 50%;
  padding: 3.75rem;
  animation: 1000ms cubic-bezier(0.215, 0.61, 0.355, 1) 800ms 1 normal both
    running ${DescAnimation};
`;

const InfoDividerAnimation = keyframes`
  0% {
    transform: scale(1, 0);
  }
  100% {
    transform: scale(1, 1);
  }
`;

export const InfoDivider = styled.div`
  width: 1px;
  margin: 2.5rem 0px;
  background: rgba(255, 255, 255, 0.2);
  transform-origin: center top;
  animation: 400ms cubic-bezier(0.215, 0.61, 0.355, 1) 780ms 1 normal both
    running ${InfoDividerAnimation};
`;

export const SpecsItemValue = styled.div`
  width: 100%;
  margin-top: 0.125rem;
  color: rgb(208, 168, 92);
  font-weight: normal;
`;

export const SpecsItemType = styled.div`
  width: 100%;
  margin-top: 0.9375rem;
  color: rgb(255, 255, 255);
`;

export const SpecsItemIcon = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  margin: 0px auto;

  & svg {
    display: inline-block;
    vertical-align: middle;
    padding: 7px;
    fill: rgb(208, 168, 92);
  }
`;

const SpecsItemAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const SpecsItem = styled.li`
  display: block;
  text-align: center;
  color: rgb(208, 168, 92);
  text-transform: uppercase;
  font-size: 0.625rem;
  letter-spacing: 0.15em;
  animation: 1000ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms 1 normal both
    running ${SpecsItemAnimation};
`;

export const SpecsList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Specs = styled.div`
  width: 50%;
  padding: 3.75rem;
`;

export const Info = styled.div`
  position: relative;
  display: flex;
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
