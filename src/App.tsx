import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Champions from './Champions/Champions';
import Champion from './Champion/Champion';
import NotFound from './NotFound';
import routes from './routes';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path={routes.mainPagePath()} element={<Champions />} />
        <Route path={routes.championPagePath()} element={<Champion />} />
        <Route path={routes.notFoundPath()} element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
