import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './Components/Header';
import AllChampions from './Pages/AllChampions';
import Champion from './Pages/Champion';
import NotFound from './Pages/NotFound';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<AllChampions />} />
      <Route path="champions/:name" element={<Champion />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
