import ChampionDifficultyRanking from '../enums/championDifficultyRanking';

export const CHAMPION_DIFFICULTIES: {
  [x in ChampionDifficultyRanking]: string;
} = {
  [ChampionDifficultyRanking.LOW]: 'champion-difficulty.ranking.low',
  [ChampionDifficultyRanking.MEDIUM]: 'champion-difficulty.ranking.medium',
  [ChampionDifficultyRanking.HIGH]: 'champion-difficulty.ranking.high',
};

export default (num: number): ChampionDifficultyRanking => {
  if (num >= 8) return ChampionDifficultyRanking.HIGH;
  if (num >= 4) return ChampionDifficultyRanking.MEDIUM;
  return ChampionDifficultyRanking.LOW;
};
