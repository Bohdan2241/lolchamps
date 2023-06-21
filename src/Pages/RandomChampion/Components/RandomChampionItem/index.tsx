import React from 'react';

import ImageSize from '../../../../enums/imageSize';
import { ChampionShortData } from '../../../../types';
import getChampionImageLink from '../../../../utils/getChampionImageLink';

const RandomChampionItem: React.FC<ChampionShortData> = ({
  id,
  name,
  title,
}) => {
  return (
    <div>
      <div>
        <img src={getChampionImageLink(id, ImageSize.MEDIUM)} />
      </div>
      <span>{name}</span>
      <span>{title}</span>
    </div>
  );
};

export default RandomChampionItem;
