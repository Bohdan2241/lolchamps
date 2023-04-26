import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Champions from './ChampionsPage/ChampionsPage';
import Header from './Header';
import NotFound from './NotFound';
import routes from './routes';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path={routes.mainPagePath()} element={<Champions />} />
        <Route path={routes.notFoundPath()} element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
