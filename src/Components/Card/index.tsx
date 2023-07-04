import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import ImageSize from '../../enums/imageSize';
import routes from '../../routes';
import getChampionImageLink from '../../utils/getChampionImageLink';
import {
  CardButton,
  CardImage,
  CardInfo,
  CardName,
  CardTitle,
  DefaultImage,
  Wrapper,
} from './style';

interface Props {
  isDefault?: boolean;
  defaultImage?: string;
  name?: string;
  id?: string;
}

const CardTemplate: React.FC<Props> = ({
  isDefault = false,
  defaultImage,
  name,
  id,
}) => {
  const { t } = useTranslation();

  if (isDefault) {
    return (
      <Wrapper>
        <DefaultImage src={defaultImage} />
        <CardInfo>
          <CardName>{t('card.default-text')}</CardName>
        </CardInfo>
      </Wrapper>
    );
  }

  if (id) {
    const image = getChampionImageLink(id, ImageSize.MEDIUM);

    return (
      <Wrapper>
        <CardImage src={image} />
        <CardInfo>
          <CardTitle>{t('card-title')}</CardTitle>
          <CardName>{name}</CardName>
          <CardButton as={Link} to={routes.championPagePath(id)}>
            {t('card.details-button')}
          </CardButton>
        </CardInfo>
      </Wrapper>
    );
  }
};

export default CardTemplate;
