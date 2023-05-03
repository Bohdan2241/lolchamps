import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import routes from '../routes';
import ChampionList from './ChampionsList';
import Navbar from './Navbar/Navbar';

function ChampionsPage() {
  const { isLoading, error, data } = useQuery(['championsList'], async () => {
    const response = await axios.get(routes.dataPath());
    return response.data;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error && error.message) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main>
      <h1>Champions</h1>
      <Navbar />
      <section className="max-w-[1440px] m-auto">
        <ChampionList championsList={data || []} />
      </section>
    </main>
  );
}

export default ChampionsPage;
