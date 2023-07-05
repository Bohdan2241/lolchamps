import styled from 'styled-components';

import {
  CARD_MIN_HEIGHT,
  COLOR_BACKGROUND_DARK_BLUE,
  COLOR_BACKGROUND_LIGHT_BLUE,
  COLOR_TEXT_WHITE,
} from '../../assets/styles/theme';
import { animation, easing, rem } from '../../utils/style';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 308px;
  height: ${CARD_MIN_HEIGHT}px;
  overflow: hidden;
  background: ${COLOR_BACKGROUND_LIGHT_BLUE};
  border: 1px solid ${COLOR_BACKGROUND_LIGHT_BLUE};

  ${animation.fadeIn({ delay: 100 })}
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
  text-transform: uppercase;
  letter-spacing: 1px;
  pointer-events: auto;
  background-color: ${COLOR_BACKGROUND_LIGHT_BLUE};
  border-radius: 4px;
  transition: all 0.3s ${easing.easeOutCubic};

  &:hover {
    background-color: ${COLOR_BACKGROUND_DARK_BLUE};
  }
`;

export const CardName = styled.span`
  margin-bottom: 10px;
  font-size: ${rem(40)};
  font-style: italic;
  text-align: center;
  text-shadow: 2px 2px 0 rgba(0 0 0 / 50%);
  text-transform: uppercase;
`;

export const CardTitle = styled.span`
  text-transform: uppercase;
`;
