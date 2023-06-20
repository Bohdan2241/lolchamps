import { css, keyframes } from 'styled-components';

import { easeOutCubic } from './easing';

interface AnimationProps {
  duration?: number;
  easing?: string;
  delay?: number;
  translateY?: number;
}

// Keyframes
export const fadeInKeyframes = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
const translateFadeInKeyframes = (translateY = 20) => keyframes`
  0% {
    opacity: 0;
    transform: translate(0, ${translateY}px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

/**
 * ANIMATIONS
 */
export const animationMixin = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  kfs: any,
  { duration = 1000, easing = easeOutCubic, delay = 0 }
) => {
  return css`
    animation: ${kfs} ${duration}ms ${easing} ${delay}ms;
    animation-fill-mode: both;
  `;
};

export const fadeIn = (props: AnimationProps) =>
  animationMixin(fadeInKeyframes, props);
export const translateFadeIn = (props: AnimationProps) =>
  animationMixin(translateFadeInKeyframes(props.translateY), props);

/**
 * TRIGGERED ANIMATIONS
 * the animation it applied only when the trigerredSelector is correct
 */
export const triggeredFadeIn = (
  trigerredSelector: string,
  props: AnimationProps
) => {
  return css`
    html.js & {
      opacity: 0;
    }
    ${trigerredSelector} {
      ${fadeIn(props)}
    }
  `;
};
export const triggeredTranslateFadeIn = (
  trigerredSelector: string,
  props: AnimationProps
) => {
  return css`
    html.js & {
      opacity: 0;
    }
    ${trigerredSelector} {
      ${translateFadeIn(props)}
    }
  `;
};
