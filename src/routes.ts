const apiPath = '/api';

export default {
  dataPath: () => [apiPath, 'champions'].join('/'),
  mainPagePath: () => '/',
  notFoundPath: () => '*',
};
