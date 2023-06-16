import { useParams } from 'react-router-dom';

import { useGetChampionByNameQuery } from '../../services/champion';
import Overview from './Sections/Overview';

const Champion = () => {
  const { name } = useParams();
  const { data, error, isLoading } = useGetChampionByNameQuery(name || '');

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Oh no, there was an error</>;
  }

  if (data && name) {
    const champion = data.data[name];

    return (
      <>
        <Overview champion={champion} />
        {/* Render the champion details */}
      </>
    );
  }
};

export default Champion;
