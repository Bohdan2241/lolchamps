import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import GiantTitle from '../../Components/GiantTitle';
import { ChampionShortData } from '../../types';
import List from './List';
import Nav from './Nav';
import { Body, Introduction, Wrapper } from './style';

type Props = {
  champions: ChampionShortData[];
};

const ChampionList: React.FC<Props> = ({ champions }) => {
  const [isTransition, setIsTransition] = useState<boolean>(false);
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
  const [activeChampions, setActiveChampions] =
    useState<ChampionShortData[]>(champions);
  const [activeListChampions, setActiveListChampions] =
    useState<ChampionShortData[]>(activeChampions);

  useEffect(() => {
    if (isFirstTime) setIsFirstTime(false);

    if (!isTransition) {
      setIsTransition(true);
      setTimeout(() => {
        setIsTransition(false);
      }, 300);
    }

    setActiveListChampions(activeChampions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeChampions]);

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('champion-list.title')}</title>
      </Helmet>
      <Wrapper>
        <GiantTitle text={t('section.champion-list.title')} toggleContrast />
        <Introduction>{t('section.champion-list.description')}</Introduction>
        <Body>
          <Nav
            champions={champions}
            onSelectActiveChampions={setActiveChampions}
          />
          <List
            isFirstTime={isFirstTime}
            isVisible={!isTransition}
            champions={activeListChampions}
          />
        </Body>
      </Wrapper>
    </>
  );
};

export default ChampionList;
