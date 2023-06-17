import { useNavigate, useParams } from 'react-router-dom';

import { useGetChampionByNameQuery } from '../../services/champion';
import Overview from './Sections/Overview';

const Champion = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetChampionByNameQuery(name || '');

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    navigate('/404', { replace: true });
    return null;
  }

  if (data && name) {
    const champion = data.data[name];

    return <Overview champion={champion} />;
  }
};

export default Champion;
