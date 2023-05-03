import { useQueryClient } from '@tanstack/react-query';
// eslint-disable-next-line import/no-extraneous-dependencies
import CreatableSelect from 'react-select/creatable';

import { ChampionsList } from '../../types';

function Search() {
  const queryClient = useQueryClient();
  const championsList = queryClient.getQueryData([
    'championsList',
  ]) as ChampionsList;

  const championOptions = championsList.map(({ node: { champion_name } }) => {
    return { value: champion_name, label: champion_name };
  });

  return <CreatableSelect isClearable options={championOptions} />;
}

export default Search;
