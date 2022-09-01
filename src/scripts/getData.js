import axios from 'axios';

export const getChampionsData = async () => {
  const response = await axios.get('http://ddragon.leagueoflegends.com/cdn/12.16.1/data/en_US/champion.json');
  return response.data;
};

export const getChampionData = async (championName) => {
  const response = await axios.get(`http://ddragon.leagueoflegends.com/cdn/12.16.1/data/en_US/champion/${championName}.json`);
  return response.data;
};
