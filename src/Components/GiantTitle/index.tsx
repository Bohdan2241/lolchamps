import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';

import { easing } from '../../utils/style';
import Reveal from '../Reveal';
import { Description, Heading, Intro, Title, Wrapper } from './style';

interface Props {
  isActive?: boolean;
  titleRef?: React.RefObject<HTMLElement | null>;
  className?: string;
  text: string;
  description?: string;
  toggleContrast?: boolean;
  transitionDelay?: number;
}

const GiantTitle = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      isActive = true,
      titleRef: externalTitleRef,
      className,
      text,
      description,
      toggleContrast = false,
      transitionDelay = 0,
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _ref
  ) => {
    const [hasEntered, setHasEntered] = useState(false);

    const titleRef = useRef<HTMLElement>(null);
    useImperativeHandle(externalTitleRef, () => titleRef.current);

    useEffect(() => {
      if (isActive && !hasEntered) setHasEntered(true);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isActive]);

    let intro: string | null = null;
    let title: string | null = null;

    // split text by lines
    const lines = text.split('\n');

    if (lines.length > 1) {
      // set first line to the intro, and second line to the title
      intro = lines[0];
      title = lines[1];
    } else {
      // when only one line, set line to title, with no intro
      title = lines[0];
    }

    return (
      <Wrapper className={className} toggleContrast={toggleContrast}>
        <Heading>
          {intro && (
            <Intro>
              <Reveal
                inline
                isActive={hasEntered}
                showDir={'nw'}
                transitionDuration={2800}
                transitionDelay={100 + transitionDelay}
                transitionTiming={easing.easeOutQuart}
              >
                <span>{intro}</span>
              </Reveal>
            </Intro>
          )}
          <Title>
            <Reveal
              inline
              isActive={hasEntered}
              showDir={'se'}
              transitionDuration={2000}
              transitionDelay={transitionDelay}
              transitionTiming={easing.easeOutQuart}
            >
              <span ref={titleRef}>{title}</span>
            </Reveal>
          </Title>
        </Heading>

        {description && (
          <Description
            transitionDelay={transitionDelay + 400}
            visible={hasEntered}
          >
            {description}
          </Description>
        )}
      </Wrapper>
    );
  }
);

GiantTitle.displayName = 'GiantTitle';

export default GiantTitle;
