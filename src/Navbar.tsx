import { Link } from 'react-router-dom';

import routes from './routes';

function Navbar() {
  return (
    <nav>
      <ul className="flex">
        <li className="p-2">
          <Link to={routes.mainPagePath()}>Champions</Link>
        </li>
        <li className="p-2">
          <Link to={routes.championPagePath()}>Champion</Link>
        </li>
        <li className="p-2">
          <Link to={routes.notFoundPath()}>NotFound</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
