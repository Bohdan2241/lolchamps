import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './Components/Header';
import AllChampions from './Pages/AllChampions';
import Champion from './Pages/Champion';
import NotFound from './Pages/NotFound';
import routes from './routes';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path={routes.championsListPagePath()} element={<AllChampions />} />
      <Route path={routes.championPagePath()} element={<Champion />} />
      <Route path={routes.notFoundPagePath()} element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
