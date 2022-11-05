import axios from 'axios';

export const getVersionDataDragon = async () => {
  const response = await axios.get('https://ddragon.leagueoflegends.com/api/versions.json');
  return response.data[0];
};

export const getChampionsData = async () => {
  const version = await getVersionDataDragon();
  const response = await axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`);
  return response.data;
};

export const getChampionData = async (championName) => {
  const version = await getVersionDataDragon();
  const response = await axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${championName}.json`);
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
