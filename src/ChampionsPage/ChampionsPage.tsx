import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import routes from '../routes';
import type { ChampionsData } from '../types';
import ChampionList from './ChampionsList';
import Navbar from './Navbar';

function Champions() {
  const { isLoading, error, data } = useQuery<ChampionsData>(
    ['champions'],
    async () => {
      const response = await axios.get<ChampionsData>(routes.dataPath());
      return response.data;
    }
  );

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

export default Champions;
