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
  return (
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
  );
};

export default Home;
