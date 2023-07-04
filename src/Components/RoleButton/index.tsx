import React from 'react';

import { Button } from './style';

type Props = {
  selected?: boolean;
  disabled?: boolean;
  onClick: () => void;
  text: string;
};

const RoleButton: React.FC<Props> = ({
  text,
  onClick,
  selected = false,
  disabled = false,
}) => {
  return (
    <Button selected={selected} onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
};

export default RoleButton;
