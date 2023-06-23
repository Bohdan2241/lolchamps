import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import GiantTitle from '../../Components/GiantTitle';
import { ChampionShortData } from '../../types';
import RandomChampionItem from './Components/RandomChampionItem';
import Nav from './Nav';
import { List } from './style';

type Props = {
  champions: ChampionShortData[];
};

const RandomChampion: React.FC<Props> = ({ champions }) => {
  const [randomChampions, setRandomChampions] = useState<ChampionShortData[]>(
    []
  );
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('random-champion.title')}</title>
      </Helmet>
      <section>
        <Nav champions={champions} setRandomChampions={setRandomChampions} />

        <GiantTitle text={t('section.champion-list.title')} toggleContrast />

        {randomChampions.length > 0 && (
          <List>
            {randomChampions.map((champion) => {
              return <RandomChampionItem {...champion} key={champion.id} />;
            })}
          </List>
        )}
      </section>
    </>
  );
};

export default RandomChampion;
