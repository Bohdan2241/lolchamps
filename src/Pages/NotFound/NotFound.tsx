import { useTranslation } from 'react-i18next';

import { StyledNotFound } from './style';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <StyledNotFound>
      <h1>{t('error.404')}</h1>
      <p>{t('pageNotFound')}</p>
    </StyledNotFound>
  );
};

export default NotFound;
