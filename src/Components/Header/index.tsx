import routes from '../../routes';
import { HeaderElement, HeaderLink } from './style';

const Header = () => {
  return (
    <HeaderElement>
      <HeaderLink to={routes.championListPagePath()}>Champions</HeaderLink>
    </HeaderElement>
  );
};

export default Header;
