import React, { useEffect, useRef, useState } from 'react';

import { easeInOutCubic } from '../../utils/style/easing';
import { RevealWrapper } from './style';

export type Direction = 'ne' | 'nw' | 'se' | 'sw';
export type TransitionDuration = number | { show: number; hide: number };
export type TransitionDelay = number | { show: number; hide: number };
export type TransitionTiming = string | { show: string; hide: string };

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
  isActive: boolean;
  safariSimplified?: boolean;
  absolute?: boolean;
  inline?: boolean;
  showDir?: Direction;
  hideDir?: Direction;
  transitionDuration?: TransitionDuration;
  transitionDelay?: TransitionDelay;
  transitionTiming?: TransitionTiming;
}

const Reveal: React.FC<Props> = ({
  children,
  isActive,
  safariSimplified = false,
  absolute = false,
  inline = false,
  showDir = 'se',
  hideDir = 'se',
  transitionDuration = 1000.0,
  transitionDelay = 0.0,
  transitionTiming = easeInOutCubic,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isActivePrev, setIsActivePrev] = useState(false);

  function removePreviousClasses() {
    const CLASSES = [
      'hide-nw',
      'hide-ne',
      'hide-se',
      'hide-sw',
      'show-nw',
      'show-ne',
      'show-se',
      'show-sw',
    ];
    CLASSES.forEach((name) => {
      if (wrapperRef.current) {
        wrapperRef.current.style.animationDuration = '0s';
        wrapperRef.current.style.animationDelay = '0s';
        wrapperRef.current.classList.remove(name);
      }
    });
  }

  useEffect(() => {
    if (!wrapperRef.current) return;

    // Show
    if (isActive) {
      removePreviousClasses();

      const duration =
        typeof transitionDuration === 'number'
          ? transitionDuration
          : transitionDuration.show;
      const delay =
        typeof transitionDelay === 'number'
          ? transitionDelay
          : transitionDelay.show;
      const timing =
        typeof transitionTiming === 'string'
          ? transitionTiming
          : transitionTiming.show;

      wrapperRef.current.style.animationDuration = `${duration}ms`;
      wrapperRef.current.style.animationDelay = `${delay}ms`;
      wrapperRef.current.style.animationTimingFunction = timing;

      wrapperRef.current.classList.add(`show-${showDir}`);

      // Hide
    } else if (isActivePrev) {
      removePreviousClasses();

      const duration =
        typeof transitionDuration === 'number'
          ? transitionDuration
          : transitionDuration.hide;
      const delay =
        typeof transitionDelay === 'number'
          ? transitionDelay
          : transitionDelay.hide;
      const timing =
        typeof transitionTiming === 'string'
          ? transitionTiming
          : transitionTiming.hide;

      wrapperRef.current.style.animationDuration = `${duration}ms`;
      wrapperRef.current.style.animationDelay = `${delay}ms`;
      wrapperRef.current.style.animationTimingFunction = timing;

      wrapperRef.current.classList.add(`hide-${hideDir}`);
    }

    setIsActivePrev(isActive);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    wrapperRef,
    isActive,
    absolute,
    inline,
    showDir,
    hideDir,
    transitionDuration,
    transitionDelay,
    transitionTiming,
  ]);

  // Prevent seeing initial 'hide' animation
  useEffect(() => {
    if (!isActive) removePreviousClasses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RevealWrapper
      className={`${safariSimplified ? 'safari-simplified' : ''} ${
        absolute ? 'absolute' : ''
      } ${inline && !absolute ? 'inline' : ''}`}
      ref={wrapperRef}
    >
      {children}
    </RevealWrapper>
  );
};

const MemoizedReveal = React.memo(Reveal, (oldProps, newProps) => {
  return !(oldProps.isActive !== newProps.isActive);
});

export default MemoizedReveal;
export { Reveal };
