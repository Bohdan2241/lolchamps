import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './Components/Header';
import Champion from './Pages/Champion';
import ChampionList from './Pages/ChampionList';
import CreateTeam from './Pages/CreateTeam';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import RandomChampion from './Pages/RandomChampion';
import routes from './routes';
import { useGetAllChampionsQuery } from './services/champion';

const App = () => {
  const { data } = useGetAllChampionsQuery();
  const unsortedChampions = Object.values(data?.data || {});
  const champions = unsortedChampions.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <Router>
      <Header />
      <Routes>
        <Route path={routes.homePagePath()} element={<Home />} />
        <Route
          path={routes.championListPagePath()}
          element={<ChampionList champions={champions} />}
        />
        <Route path={routes.championPagePath()} element={<Champion />} />
        <Route
          path={routes.randomChampionPagePath()}
          element={<RandomChampion champions={champions} />}
        />
        <Route path={routes.notFoundPagePath()} element={<NotFound />} />
        <Route
          path={routes.createTeamPagePath()}
          element={<CreateTeam champions={champions} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
