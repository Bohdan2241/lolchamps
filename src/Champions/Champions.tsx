import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import routes from '../routes';

function Champions() {
  const { isLoading, error, data } = useQuery(['champions'], async () => {
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
    <div className="text-center text-white bg-gray-900">{data.length}</div>
  );
}

export default Champions;
