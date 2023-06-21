import React, { useState } from 'react';

import ChampionRole from '../../../enums/championRole';
import { ChampionShortData } from '../../../types';

type Props = {
  champions: ChampionShortData[];
  setRandomChampions: (n: ChampionShortData[]) => void;
};

const Nav: React.FC<Props> = ({ champions, setRandomChampions }) => {
  const [renderCount, setRenderCount] = useState<number>(1);
  const [selectedRoles, setSelectedRoles] = useState(
    Object.values(ChampionRole)
  );

  const handleRandomize = () => {
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

  return (
    <nav>
      <button
        onClick={handleRandomize}
        disabled={renderCount <= 0 || selectedRoles.length === 0}
      >
        Randomize
      </button>
      <div>
        <label htmlFor="countInput">Number of times to render:</label>
        <input
          id="countInput"
          type="number"
          min={1}
          max={5}
          value={renderCount}
          onChange={handleCountChange}
        />
      </div>
      <div>
        {Object.values(ChampionRole).map((role) => (
          <label key={role}>
            {role}
            <input
              type="checkbox"
              checked={selectedRoles.includes(role)}
              onChange={(e) => handleRoleChange(e, role)}
            />
          </label>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
