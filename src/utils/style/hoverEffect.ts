import {
  COLOR_BACKGROUND_LIGHT_GREY,
  MEDIA_NOT_MOBILE,
} from '../../assets/styles/theme';
import * as easing from './easing';

export const ZOOM_DOWN = 1.05;
export const ZOOM_UP = 1.001;

/**
 * * *******************
 * * SCALE
 * * *******************
 */
export const scale = (
  ContainerSelector: string | unknown,
  initialValue: number,
  targetedValue: number
) => `
  overflow: hidden;
  & > * {
    /* Don't apply hover effect to mobile safari */
    html:not(.is-safari) & {
      transform: scale3d(${initialValue}, ${initialValue}, 1);
      transition: transform 300ms ${easing.easeOutQuad};
    }
    html.is-safari & {
      @media ${MEDIA_NOT_MOBILE} {
        transform: scale3d(${initialValue}, ${initialValue}, 1);
        transition: transform 300ms ${easing.easeOutQuad};
      }
    }

    ${ContainerSelector}:hover & {
      /* Don't apply hover effect to mobile safari */
      html:not(.is-safari) & {
        transform: scale3d(${targetedValue}, ${targetedValue}, 1);
      }
      html.is-safari & {
        @media ${MEDIA_NOT_MOBILE} {
          transform: scale3d(${targetedValue}, ${targetedValue}, 1);
        }
      }
    }
  }
`;

export const scaleDown = (ContainerSelector: unknown) =>
  scale(ContainerSelector, ZOOM_DOWN, ZOOM_UP);

export const scaleUp = (ContainerSelector: string) =>
  scale(ContainerSelector, ZOOM_UP, ZOOM_DOWN);

/**
 * * *******************
 * * BACKGROUND SELECTION
 * * *******************
 */
export const background = () => `
  transition: background-color 0.5s ${easing.easeOutCubic};
  &:hover {
    background-color: ${COLOR_BACKGROUND_LIGHT_GREY};
  }
`;
