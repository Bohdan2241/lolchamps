const apiPath = '/api';

export default {
  dataPath: () => [apiPath, 'champions'].join('/'),
  championDataPath: () => [apiPath, 'champion'].join('/'),
  mainPagePath: () => '/',
  championPagePath: () => '/champion',
  notFoundPath: () => '*',
};
