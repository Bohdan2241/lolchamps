/* eslint-disable consistent-return */
import axios from 'axios';

export const getVersionDataDragon = async () => {
  try {
    const response = await axios.get('https://ddragon.leagueoflegends.com/api/versions.json');
    return response.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const getChampionsData = async () => {
  try {
    const version = await getVersionDataDragon();
    const response = await axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getChampionData = async (championName) => {
  try {
    const version = await getVersionDataDragon();
    const response = await axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${championName}.json`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
