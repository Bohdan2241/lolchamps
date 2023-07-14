import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import RoleButton from '../../../Components/RoleButton';
import ChampionRole from '../../../enums/championRole';
import { ChampionShortData } from '../../../types';
import {
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  Nav,
  Roles,
} from './style';

const MAX_RANDOM_CHAMPS = 5;

type Props = {
  champions: ChampionShortData[];
  setRandomChampions: (n: ChampionShortData[]) => void;
  setLoading: (v: boolean) => void;
};

const Section: React.FC<Props> = ({
  champions,
  setRandomChampions,
  setLoading,
}) => {
  const { t } = useTranslation();
  const [renderCount, setRenderCount] = useState<number>(1);
  const [selectedRoles, setSelectedRoles] = useState(
    Object.values(ChampionRole)
  );

  const handleRandomize = () => {
    setLoading(true);
    let filteredChampions = champions;

    if (selectedRoles.length) {
      filteredChampions = champions.filter((champion) => {
        return selectedRoles.some((role) => champion.tags.includes(role));
      });
    }

    const randomIndices = new Set<number>();

    while (randomIndices.size < renderCount) {
      const randomIndex = Math.floor(Math.random() * filteredChampions.length);
      randomIndices.add(randomIndex);
    }

    const random = Array.from(randomIndices).map(
      (index) => filteredChampions[index]
    );
    setRandomChampions(random);
  };

  const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const count = Number(event.target.value);
    setRenderCount(count);
  };

  const handleRoleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    role: ChampionRole
  ) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedRoles((prevRoles) => [...prevRoles, role]);
    } else {
      setSelectedRoles((prevRoles) =>
        prevRoles.filter((prevRole) => prevRole !== role)
      );
    }
  };

  const isDisabled =
    renderCount < 1 ||
    renderCount > MAX_RANDOM_CHAMPS ||
    selectedRoles.length === 0;

  return (
    <Nav>
      <div>
        <RoleButton
          onClick={handleRandomize}
          // TODO: add tooltip 1-5 + role > 0
          disabled={isDisabled}
          text={t('random-champion-page.button')}
        />
      </div>
      <div>
        <label htmlFor="countInput">
          Number of times to render:
          <input
            id="countInput"
            type="number"
            min={1}
            max={MAX_RANDOM_CHAMPS}
            value={renderCount}
            onChange={handleCountChange}
          />
        </label>
      </div>
      <Roles>
        {Object.values(ChampionRole).map((role) => (
          <CheckboxContainer key={role}>
            <CheckboxLabel>
              <CheckboxInput
                type="checkbox"
                checked={selectedRoles.includes(role)}
                onChange={(e) => handleRoleChange(e, role)}
              />
              {role}
            </CheckboxLabel>
          </CheckboxContainer>
        ))}
      </Roles>
    </Nav>
  );
};

export default Section;
