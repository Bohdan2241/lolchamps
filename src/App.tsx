// eslint-disable-next-line import/no-extraneous-dependencies
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function App() {
  const { isLoading, error, data } = useQuery(['champions'], async () => {
    const response = await axios.get('/api/champions');
    return response.data;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error && error.message) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="text-center text-white bg-gray-900 ">{data.length}</div>
  );
}

export default App;
