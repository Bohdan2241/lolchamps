import { useDroppable } from '@dnd-kit/core';
import React from 'react';

import { Wrapper } from './style';

const Map = () => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });

  const style = {
    backgroundColor: isOver ? 'green' : undefined,
  };

  return (
    <Wrapper ref={setNodeRef} style={style}>
      Map
    </Wrapper>
  );
};

export default Map;
