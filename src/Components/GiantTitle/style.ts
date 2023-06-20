import styled, { css, keyframes } from 'styled-components';

import {
  COLOR_TEXT_BLACK,
  COLOR_TEXT_WHITE,
  FONT_FAMILY_SERIF,
  MEDIA_MOBILE_ALL,
  MEDIA_MOBILE_SMALL,
  MEDIA_MOBILE_TINY,
  MEDIA_TABLET_ALL,
} from '../../assets/styles/theme';
import { easing } from '../../utils/style/easing';
import rem from '../../utils/style/rem';

const simpleFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Wrapper = styled.div<{ toggleContrast: boolean }>`
  position: relative;
  z-index: 1;

  text-align: center;
  color: ${({ toggleContrast }) =>
    toggleContrast ? COLOR_TEXT_WHITE : COLOR_TEXT_BLACK};
`;

export const Heading = styled.h1`
  margin: 0;
  font-weight: normal;
`;

export const Intro = styled.span`
  display: block;

  font-size: ${rem(24)};
  line-height: 1; // 1.1
  font-style: italic;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  @media ${MEDIA_TABLET_ALL} {
    font-size: ${rem(20)};
  }

  @media ${MEDIA_MOBILE_ALL} {
    font-size: ${rem(16)};
  }

  @media ${MEDIA_MOBILE_SMALL} {
    font-size: ${rem(15)};
  }

  @media ${MEDIA_MOBILE_TINY} {
    font-size: ${rem(14)};
  }

  /* opacity: 0;
  ${Wrapper}.is-visible & {
    animation: ${simpleFadeIn} forwards 1.4s 0.25s ${easing.easeOutCubic};
  } */
`;

export const Title = styled.strong`
  display: block;
  font-size: 120px;

  @media ${MEDIA_MOBILE_ALL} {
    margin-top: ${rem(5)};
    font-size: 46px;
  }

  line-height: 1; // 1.1
  font-family: ${FONT_FAMILY_SERIF};
  font-style: italic;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  span {
    /*
      Provide space for glyphs which can extend beyond the
      left and bottom baselines when italics
      e.g. 'J' in 'JINX'
    */
    display: block;
    padding: 0 15px 10px;
    margin-bottom: -10px;
  }
`;

export const Description = styled.p<{
  transitionDelay: number;
  visible: boolean;
}>`
  position: relative;
  max-width: 600px;
  text-align: center;
  padding: 0 10%;
  margin: 12px auto 0;
  font-size: ${rem(14)};
  letter-spacing: 0.08em;
  line-height: 1.6;

  @media ${MEDIA_MOBILE_ALL} {
    padding: 0;
  }

  opacity: 0;
  transition: opacity 500ms ease-out
    ${({ transitionDelay }) => transitionDelay + 'ms'};

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
    `}
`;
