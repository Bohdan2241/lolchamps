/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import axios from 'axios';

const app = express();

app.get('/api/champions', (_req, res) => {
  axios
    .get(
      'https://www.leagueoflegends.com/page-data/en-us/champions/page-data.json'
    )
    .then((response) => {
      res.send(response.data.result.data.allChampions.edges);
      console.log('ok');
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
