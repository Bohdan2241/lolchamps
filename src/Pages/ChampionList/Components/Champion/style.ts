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
  opacity: 0;
  transition: opacity 300ms ${easing.easeOutQuad},
    transform 300ms ${easing.easeOutQuad};
  transform: translate(0, 10px);
  /* stylelint-disable selector-class-pattern */
  &.isFirstTime {
    ${({ delay }) => animation.translateFadeIn({ delay: 600 + delay })}
    animation-fill-mode: backwards;
  }

  &.isVisible {
    opacity: 1;
    transition-delay: ${({ delay }) => delay}ms;
    transform: translate(0, 0);
  }
  /* stylelint-enable selector-class-pattern */
`;

export const ImageContainer = styled.span`
  position: relative;
  display: block;
  width: 100%;
  overflow: hidden;

  &::before {
    position: relative;
    display: block;
    width: 100%;
    padding-top: 160%;
    content: '';
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    width: 11%;
    padding-top: 11%;
    content: '';
    background-color: ${COLOR_BACKGROUND_DARK_LIGHT};
    transition: transform 0.5s;
    transform: translate(50%, -50%) rotate(45deg);
  }

  ${hoverEffect.scaleDown(Wrapper)}

  > * {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Name = styled.span`
  display: block;
  padding: 6% 8%;
  overflow: hidden;
  background-color: ${COLOR_BACKGROUND_DARK_BLUE};
  transition: 300ms background-color ${easing.easeOutQuad};
`;

export const Text = styled.span`
  display: inline-block;
  font-family: ${FONT_FAMILY_SERIF};
  font-size: 20px;
  font-style: italic;
  font-weight: 800;
  color: white;
  text-overflow: ellipsis;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
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
