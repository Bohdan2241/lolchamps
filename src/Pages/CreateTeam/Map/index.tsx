import React from 'react';

import ChampionLane from '../../../enums/championLane';
import DroppableArea from '../Components/DroppableArea';
import map1440 from './assets/map-1440.png';
import { BackgroundImage, Wrapper } from './style';

type Props = {
  lanes: {
    [key in ChampionLane]: string;
  };
};

const Map: React.FC<Props> = ({ lanes }) => {
  return (
    <Wrapper>
      <BackgroundImage src={map1440} />

      {Object.values(ChampionLane).map((lane, i) => (
        <DroppableArea key={i} lane={lane} src={lanes[lane]} />
      ))}
    </Wrapper>
  );
};

export default Map;
