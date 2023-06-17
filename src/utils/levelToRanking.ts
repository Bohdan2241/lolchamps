import { ChampionDifficultyRanking } from '../types';

export default (num: number): ChampionDifficultyRanking => {
  if (num >= 8) return ChampionDifficultyRanking.HIGH;
  if (num >= 4) return ChampionDifficultyRanking.MEDIUM;
  return ChampionDifficultyRanking.LOW;
};
