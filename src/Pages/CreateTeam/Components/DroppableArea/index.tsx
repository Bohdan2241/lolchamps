import { useDroppable } from '@dnd-kit/core';
import React from 'react';

import ChampionLane from '../../../../enums/championLane';
import { SelectedChampion, Title } from './style';

type Props = {
  lane: ChampionLane;
  src: string;
};

const DroppableArea: React.FC<Props> = ({ lane, src }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: lane,
  });

  return (
    <SelectedChampion
      key={lane}
      className={lane}
      ref={setNodeRef}
      $isOver={isOver}
    >
      <Title>{lane}</Title>
      {src && <img src={src} alt={lane} />}
    </SelectedChampion>
  );
};

export default DroppableArea;
