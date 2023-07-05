import styled, { css } from 'styled-components';

import {
  COLOR_TEXT_BLACK,
  COLOR_TEXT_WHITE,
  FONT_FAMILY_SERIF,
  MEDIA_MOBILE_ALL,
  MEDIA_MOBILE_SMALL,
  MEDIA_MOBILE_TINY,
  MEDIA_TABLET_ALL,
} from '../../assets/styles/theme';
import rem from '../../utils/style/rem';

export const Wrapper = styled.div<{ $toggleContrast: boolean }>`
  position: relative;
  z-index: 1;
  color: ${({ $toggleContrast }) =>
    $toggleContrast ? COLOR_TEXT_WHITE : COLOR_TEXT_BLACK};
  text-align: center;
`;

export const Heading = styled.h1`
  margin: 0;
  font-weight: normal;
`;

export const Intro = styled.span`
  display: block;
  font-size: ${rem(24)};
  font-style: italic;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.1em;

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
`;

export const Title = styled.strong`
  display: block;
  font-family: ${FONT_FAMILY_SERIF};
  font-size: 120px;
  font-style: italic;
  font-weight: 800;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.03em;

  @media ${MEDIA_MOBILE_ALL} {
    margin-top: ${rem(5)};
    font-size: 46px;
  }

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
  padding: 0 10%;
  margin: 12px auto 0;
  font-size: ${rem(14)};
  line-height: 1.6;
  text-align: center;
  letter-spacing: 0.08em;

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
