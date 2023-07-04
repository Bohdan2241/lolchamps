import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import GiantTitle from '../../Components/GiantTitle';
import { ChampionShortData } from '../../types';
import Loader from './Components/Loader';
import List from './List';
import Nav from './Nav';
import { Section, Wrapper } from './style';

type Props = {
  champions: ChampionShortData[];
};

const RandomChampion: React.FC<Props> = ({ champions }) => {
  const { t } = useTranslation();
  const [randomChampions, setRandomChampions] = useState<ChampionShortData[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [randomChampions]);

  return (
    <>
      <Helmet>
        <title>{t('random-champion-page.title')}</title>
      </Helmet>
      <Section>
        <GiantTitle
          text={t('section.random-champion.title')}
          $toggleContrast={true}
        />

        <Nav
          champions={champions}
          setRandomChampions={setRandomChampions}
          setLoading={setLoading}
        />
        <Wrapper>
          {loading ? <Loader /> : <List randomChampions={randomChampions} />}
        </Wrapper>
      </Section>
    </>
  );
};

export default RandomChampion;
