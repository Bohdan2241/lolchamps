import axios from 'axios';

export const getChampionsData = async () => {
  const response = await axios.get('http://ddragon.leagueoflegends.com/cdn/12.16.1/data/en_US/champion.json');
  return response.data;
};

export const getChampionData = async (championName) => {
  const response = await axios.get(`http://ddragon.leagueoflegends.com/cdn/12.16.1/data/en_US/champion/${championName}.json`);
  return response.data;
};

// export const test = async () => {
//   const config = {
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'application/json',
//     },
//   };
//   const response = await axios.get('https://www.leagueoflegends.com/page-data/en-us/champions/renata/page-data.json', config);
//   console.log(response.data);
// };
