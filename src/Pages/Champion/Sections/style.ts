import styled, { keyframes } from 'styled-components';

import { COLOR_TEXT_WHITE } from '../../../assets/styles/theme';

export const ItemDifficultyIcon = styled.span`
  box-sizing: content-box;
  display: inline-block;
  width: 30.6667%;
  height: 100%;
  padding-right: 4%;
  background-color: rgb(8 215 247);
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
  padding: 0 8% 0 5%;
  white-space: nowrap;
`;

export const WrapDifficultyIcon = styled.span`
  position: absolute;
  top: 20px;
  display: block;
  width: 50px;
  height: 10px;
`;

export const ChampionsButtonContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 30px;
  font-size: 10px;
  font-weight: 600;
  text-align: left;
  letter-spacing: 0.16em;
`;

export const ChampionsButton = styled.a`
  position: relative;
  display: block;
  height: 100%;
  padding: 10px 20px;
  color: #fff;
  background-color: rgba(0 9 19 / 50%);
  border: 1px solid rgb(8 215 247);
`;

export const ChampionsButtonText = styled.span`
  padding-right: 10px;
  vertical-align: middle;
`;

export const ChampionsButtonIcon = styled.svg`
  width: 14px;
  height: 14px;
  vertical-align: middle;
  fill: #fff;
`;

const Line = styled.div`
  position: absolute;
  top: 0;
  height: 1px;
  background-color: rgba(255 255 255 / 20%);
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
  border-color: rgba(255 255 255 / 20%);
  border-style: solid;
  border-width: 1px;
  border-top-width: 0;
`;

export const Text = styled.p`
  max-width: 100%;
  margin-top: 0;
  font-size: 0.875rem;
  line-height: 1.2857;
  color: ${COLOR_TEXT_WHITE};
  letter-spacing: 0.08em;

  & button {
    padding: 0;
    font-size: 0.625rem;
    color: rgb(208 168 92);
    text-transform: uppercase;
    background-color: transparent;
    border: 0;
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
  margin: 2.5rem 0;
  background: rgba(255 255 255 / 20%);
  transform-origin: center top;
  animation: 400ms cubic-bezier(0.215, 0.61, 0.355, 1) 780ms 1 normal both
    running ${InfoDividerAnimation};
`;

export const SpecsItemValue = styled.div`
  width: 100%;
  margin-top: 0.125rem;
  font-weight: normal;
  color: rgb(208 168 92);
`;

export const SpecsItemType = styled.div`
  width: 100%;
  margin-top: 0.9375rem;
  color: ${COLOR_TEXT_WHITE};
`;

export const SpecsItemIcon = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0 auto;

  & svg {
    display: inline-block;
    padding: 7px;
    vertical-align: middle;
    fill: rgb(208 168 92);
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
  font-size: 0.625rem;
  color: rgb(208 168 92);
  text-align: center;
  text-transform: uppercase;
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
  margin: -5.625rem 3.75rem 0;
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: 2000ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms 1 normal both
    running ${MainImageAnimation};
  object-fit: cover;
  object-position: center 20%;
`;

export const ForegroundAsset = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 59.01%;
  overflow: hidden;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-mask-image: linear-gradient(rgb(0 0 0) 65%, rgba(0 0 0 / 0%) 98%);
  mask-image: linear-gradient(rgb(0 0 0) 65%, rgba(0 0 0 / 0%) 98%);
`;

export const SectionInner = styled.div`
  max-width: 1335px;
  padding: 0 3.75rem;
  margin: 0 auto;
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
  top: -5%;
  left: -5%;
  width: 110%;
  height: 110%;

  &::after {
    position: absolute;
    bottom: -10%;
    left: 0;
    width: 100%;
    height: 50%;
    content: '';
    background: linear-gradient(transparent, rgb(0 9 19) 70%);
  }
`;

export const BackgroundAsset = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80vh;
  max-height: 800px;
  overflow: hidden;
`;

export const OverviewSection = styled.section`
  position: relative;
  min-height: 75vh;
  padding: 30px 0 75px;
`;
