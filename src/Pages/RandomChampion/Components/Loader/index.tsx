import React from 'react';

import {
  Circle,
  CircleBackground,
  CircleProgress,
  LoadingContainer,
} from './style';

const Loader: React.FC = () => {
  return (
    <LoadingContainer>
      <Circle>
        <CircleBackground r="48" cx="50%" cy="50%" />
        <CircleProgress r="48" cx="50%" cy="50%" />
      </Circle>
    </LoadingContainer>
  );
};

export default Loader;
