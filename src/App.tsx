import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './Components/Header';
import Champion from './Pages/Champion';
import ChampionList from './Pages/ChampionList';
import NotFound from './Pages/NotFound/NotFound';
import routes from './routes';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path={routes.championListPagePath()} element={<ChampionList />} />
      <Route path={routes.championPagePath()} element={<Champion />} />
      <Route path={routes.notFoundPagePath()} element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
