export default {
  homePagePath: () => '/',
  championListPagePath: () => '/champions/',
  championPagePath: (id = ':name') => ['/champions', id].join('/'),
  randomChampionPagePath: () => '/random-champion/',
  createTeamPagePath: () => '/create-team/',
  notFoundPagePath: () => '*',
};
