import routes from '../../routes';
import { HeaderElement, HeaderLink } from './style';

// TODO: add active styles to current link

const Header = () => {
  return (
    <HeaderElement>
      <HeaderLink to={routes.homePagePath()}>Home</HeaderLink>
      <HeaderLink to={routes.championListPagePath()}>Champions</HeaderLink>
      <HeaderLink to={routes.randomChampionPagePath()}>
        Choose champion
      </HeaderLink>
      <HeaderLink to={routes.createTeamPagePath()}>Create Team</HeaderLink>
    </HeaderElement>
  );
};

export default Header;
