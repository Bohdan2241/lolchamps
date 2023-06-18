import { Link } from 'react-router-dom';
import styled from 'styled-components';

import routes from '../routes';

const HeaderElement = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  height: 50px;
  padding: 15px 20px;
  border-bottom: 1px solid rgb(0, 102, 128);
  background-color: rgb(0, 9, 19);
  color: #fff;
`;

const HeaderLink = styled(Link)`
  color: inherit;
`;

const Header = () => {
  return (
    <HeaderElement>
      <HeaderLink to={routes.championsListPagePath()}>Champions</HeaderLink>
    </HeaderElement>
  );
};

export default Header;
