import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './Components/Header';
import Loader from './Components/Loader';
import Home from './Pages/Home';
import routes from './routes';
import { useGetAllChampionsQuery } from './services/champion';

const Champion = lazy(() => import('./Pages/Champion'));
const ChampionList = lazy(() => import('./Pages/ChampionList'));
const CreateTeam = lazy(() => import('./Pages/CreateTeam'));
const NotFound = lazy(() => import('./Pages/NotFound'));
const RandomChampion = lazy(() => import('./Pages/RandomChampion'));

export const App = () => {
  const { data } = useGetAllChampionsQuery();
  const unsortedChampions = Object.values(data?.data || {});
  const champions = unsortedChampions.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </>
  );
};

export const WrappedApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};
