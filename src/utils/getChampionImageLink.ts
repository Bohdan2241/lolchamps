const getChampionImageLink = (championId: string, size: string) => {
  if (size === 'small') {
    return `https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/${championId}.png`;
  }

  const baseURL = 'https://ddragon.leagueoflegends.com/cdn/img/champion/';
  return `${baseURL}${size}/${championId}_0.jpg`;
};

export default getChampionImageLink;
