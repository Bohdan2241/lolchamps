import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import AllChampions from './Pages/AllChampions';
import Champion from './Pages/Champion';
import NotFound from './Pages/NotFound';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<AllChampions />} />
      <Route path="/champions/:name" element={<Champion />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
