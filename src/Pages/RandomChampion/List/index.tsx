import React from 'react';

import CardTemplate from '../../../Components/Card';
import { ChampionShortData } from '../../../types';
import DefaultCardImage from './assets/defaultCardImage.png';

type Props = {
  randomChampions: ChampionShortData[];
};

const List: React.FC<Props> = ({ randomChampions }) => {
  return (
    <>
      {randomChampions.length === 0 ? (
        <CardTemplate defaultImage={DefaultCardImage} isDefault={true} />
      ) : (
        randomChampions.map(({ id, name }) => (
          <CardTemplate name={name} id={id} key={id} />
        ))
      )}
    </>
  );
};

export default List;
