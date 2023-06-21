const getChampionImageLink = (championId: string, size: string) => {
  const baseURL = 'http://ddragon.leagueoflegends.com/cdn/img/champion/';
  return `${baseURL}${size}/${championId}_0.jpg`;
};

export default getChampionImageLink;
