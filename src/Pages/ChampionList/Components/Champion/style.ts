import styled from 'styled-components';

import {
  COLOR_BACKGROUND_DARK_BLUE,
  COLOR_BACKGROUND_DARK_LIGHT,
  COLOR_BACKGROUND_LIGHT_BLUE,
  FONT_FAMILY_SERIF,
  MEDIA_MOBILE_ALL,
} from '../../../../assets/styles/theme';
import { animation, easing, hoverEffect, rem } from '../../../../utils/style';

export const Wrapper = styled.a<{ delay: number }>`
  display: block;

  transition: opacity 300ms ${easing.easeOutQuad},
    transform 300ms ${easing.easeOutQuad};

  opacity: 0;
  transform: translate(0, 10px);

  &.isFirstTime {
    ${({ delay }) => animation.translateFadeIn({ delay: 600 + delay })}
    animation-fill-mode: backwards;
  }

  &.isVisible {
    transition-delay: ${({ delay }) => delay}ms;
    opacity: 1;
    transform: translate(0, 0);
  }
`;

export const ImageContainer = styled.span`
  position: relative;
  display: block;
  width: 100%;
  overflow: hidden;

  &::before {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    padding-top: 160%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 11%;
    padding-top: 11%;
    background-color: ${COLOR_BACKGROUND_DARK_LIGHT};
    transition: transform 0.5s;
    transform: translate(50%, -50%) rotate(45deg);
  }

  ${hoverEffect.scaleDown(Wrapper)}

  > * {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Name = styled.span`
  display: block;
  overflow: hidden;
  background-color: ${COLOR_BACKGROUND_DARK_BLUE};
  padding: 6% 8%;

  transition: 300ms background-color ${easing.easeOutQuad};
`;

export const Text = styled.span`
  display: inline-block;
  color: white;
  white-space: nowrap;
  font-size: 20px;
  font-family: ${FONT_FAMILY_SERIF};
  font-weight: 800;
  text-transform: uppercase;
  font-style: italic;
  letter-spacing: 0.08em;
  text-overflow: ellipsis;

  transition: transform 300ms ${easing.easeOutQuad};
`;

export const ResponsiveWrapper = styled(Wrapper)`
  &:hover {
    ${ImageContainer}::after {
      transform: translate(100%, -100%) rotate(45deg);
    }

    ${Name} {
      background-color: ${COLOR_BACKGROUND_LIGHT_BLUE};
    }
    ${Text} {
      transform: translate(10px, 0);
    }
  }

  @media ${MEDIA_MOBILE_ALL} {
    ${Text} {
      font-size: ${rem(14)};
    }
  }
`;
