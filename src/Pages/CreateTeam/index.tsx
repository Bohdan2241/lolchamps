import { DndContext, DragEndEvent, rectIntersection } from '@dnd-kit/core';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import ChampionLane from '../../enums/championLane';
import { ChampionShortData } from '../../types';
import SidebarItem from './Components/DraggableItem';
import Map from './Map';
import { Sidebar, Wrapper } from './style';

type ChampionLanesState = {
  [key in ChampionLane]: string;
};

const initialChampionLanesState: ChampionLanesState = {
  [ChampionLane.TOP]: '',
  [ChampionLane.JUNGLE]: '',
  [ChampionLane.MID]: '',
  [ChampionLane.ADC]: '',
  [ChampionLane.SUPPORT]: '',
};

type Props = {
  champions: ChampionShortData[];
};

const CreateTeam: React.FC<Props> = ({ champions }) => {
  const [championLanes, setChampionLanes] = useState<ChampionLanesState>(
    initialChampionLanesState
  );
  const { t } = useTranslation();

  const updateChampionLane = (lane: ChampionLane, value: string) => {
    setChampionLanes((prevState) => ({
      ...prevState,
      [lane]: value,
    }));
  };

  const addChampionToMap = (e: DragEndEvent) => {
    const newItem = e.active.data.current;
    const targetLane = e.over?.id;

    if (!newItem || !targetLane) return;

    const lane = Object.values(ChampionLane).find((championLane) => {
      return targetLane === championLane;
    });

    if (lane) {
      updateChampionLane(lane, newItem.championImageLink);
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('create-team-page.title')}</title>
      </Helmet>

      <Wrapper>
        <DndContext
          onDragEnd={addChampionToMap}
          collisionDetection={rectIntersection}
        >
          <Sidebar>
            {champions.map(({ id }) => (
              <SidebarItem id={id} key={id} />
            ))}
          </Sidebar>
          <Map lanes={championLanes} />
        </DndContext>
      </Wrapper>
    </>
  );
};

export default CreateTeam;
