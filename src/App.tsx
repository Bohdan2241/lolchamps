import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Champions from './ChampionsPage/ChampionsPage';
import Champion from './ChampionPage/ChampionPage';
import NotFound from './NotFound';
import routes from './routes';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path={routes.mainPagePath()} element={<Champions />} />
        <Route path={routes.championPagePath()} element={<Champion />} />
        <Route path={routes.notFoundPath()} element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
