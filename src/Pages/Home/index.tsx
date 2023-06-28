import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import heroVideo from './assets/heroVideo.mp4';
import homeLogo from './assets/homeLogo.png';
import {
  ForegroundInner,
  ForegroundRow,
  ForegroundVideoWrapper,
  Logo,
  LogoImage,
  Video,
  Wrapper,
} from './style';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('home-page.title')}</title>
      </Helmet>
      <Wrapper>
        <ForegroundVideoWrapper>
          <Video src={heroVideo} autoPlay muted loop playsInline></Video>
        </ForegroundVideoWrapper>
        <ForegroundInner>
          <ForegroundRow>
            <Logo>
              <LogoImage src={homeLogo} alt="logo" />
            </Logo>
          </ForegroundRow>
        </ForegroundInner>
      </Wrapper>
    </>
  );
};

export default Home;
