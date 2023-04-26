import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import routes from '../routes';

function Champion() {
  const { isLoading, error, data } = useQuery(['champion'], async () => {
    const response = await axios.get(routes.championDataPath(), {
      params: {
        championName: 'aatrox',
      },
    });

    return JSON.parse(response.data.result.data.all.nodes[0].data_dragon_json);
  });
  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error && error.message) {
    return <div>Error: {error.message}</div>;
  }

  return <div className="text-center text-black bg-white">{data.name}</div>;
}

export default Champion;
