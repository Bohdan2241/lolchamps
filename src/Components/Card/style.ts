import styled, { keyframes } from 'styled-components';

import {
  CARD_MIN_HEIGHT,
  COLOR_BACKGROUND_DARK_BLUE,
  COLOR_BACKGROUND_LIGHT_BLUE,
  COLOR_TEXT_WHITE,
} from '../../assets/styles/theme';
import { animation, easing, rem } from '../../utils/style';

const shakeAnimation = keyframes`
  0% { transform: translate(0, 0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-2px, -2px); }
  80% { transform: translate(2px, 2px); }
  100% { transform: translate(0, 0); }
`;

export const Wrapper = styled.div`
  position: relative;
  background: ${COLOR_BACKGROUND_LIGHT_BLUE};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 308px;
  height: ${CARD_MIN_HEIGHT}px;
  border: 1px solid ${COLOR_BACKGROUND_LIGHT_BLUE};

  /* transition: transform 0.5s ease-in-out; */
  /* pointer-events: none; */
  ${animation.fadeIn({ delay: 100 })}/* &:hover {
    animation: ${shakeAnimation} 0.3s;
  } */
`;

export const DefaultImage = styled.img`
  height: 100%;
`;

export const CardImage = styled.img`
  transform: scale3d(1.05, 1.05, 1);
`;

export const CardInfo = styled.div`
  position: absolute;
  right: 0;
  bottom: 30px;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardButton = styled.a`
  padding: 10px;
  font-style: italic;
  color: ${COLOR_TEXT_WHITE};
  background-color: ${COLOR_BACKGROUND_LIGHT_BLUE};
  border-radius: 4px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ${easing.easeOutCubic};
  pointer-events: auto;

  &:hover {
    background-color: ${COLOR_BACKGROUND_DARK_BLUE};
  }
`;

export const CardName = styled.span`
  margin-bottom: 10px;

  font-size: ${rem(40)};
  font-style: italic;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.5);
  text-align: center;
  text-transform: uppercase;
`;

export const CardTitle = styled.span`
  text-transform: uppercase;
`;
