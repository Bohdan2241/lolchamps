import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import { useGetChampionByNameQuery } from '../../services/champion';
import Overview from './Sections/Overview';

const Champion = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetChampionByNameQuery(name || '');
  const { t } = useTranslation();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    navigate('/404', { replace: true });
  }

  if (data && name) {
    const champion = data.data[name];

    return (
      <>
        <Helmet>
          <title>
            {champion.name}, {champion.title}
            {t('champion-page.title')}
          </title>
        </Helmet>

        <Overview champion={champion} />
      </>
    );
  }
};

export default Champion;
