import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import getChampionLargeImageLink from '../../../../utils/getChampionLargeImageLink';
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
  const { t } = useTranslation();

  return (
    <ResponsiveWrapper
      as={Link}
      to={`${t('champion-link.start')}${id}`}
      className={`${className} ${isVisible ? 'isVisible' : ''} ${
        isFirstTime ? 'isFirstTime' : ''
      }`}
      delay={animationDelay}
    >
      <ImageContainer>
        <img src={getChampionLargeImageLink(id)} />
      </ImageContainer>
      <Name>
        <Text>{name}</Text>
      </Name>
    </ResponsiveWrapper>
  );
};

export default Section;
