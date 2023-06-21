import React from 'react';
import { Link } from 'react-router-dom';

import ImageSize from '../../../../enums/imageSize';
import getChampionLargeImageLink from '../../../../utils/getChampionImageLink';
import { ImageContainer, Name, ResponsiveWrapper, Text } from './style';

export interface Props {
  id: string;
  name: string;
  animationDelay?: number;
  isVisible?: boolean;
  isFirstTime?: boolean;
  className?: string;
}

const Section: React.FC<Props> = ({
  id,
  name,
  animationDelay = 0,
  isVisible = true,
  isFirstTime = true,
  className,
}) => {
  return (
    <ResponsiveWrapper
      as={Link}
      to={id}
      className={`${className} ${isVisible ? 'isVisible' : ''} ${
        isFirstTime ? 'isFirstTime' : ''
      }`}
      delay={animationDelay}
    >
      <ImageContainer>
        <img src={getChampionLargeImageLink(id, ImageSize.MEDIUM)} />
      </ImageContainer>
      <Name>
        <Text>{name}</Text>
      </Name>
    </ResponsiveWrapper>
  );
};

export default Section;
