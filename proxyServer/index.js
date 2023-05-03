import express from 'express';
import morgan from 'morgan';
import axios from 'axios';
import path from 'path';

const app = express();
const logger = morgan('combined');
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(logger);

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/api/champions', (req, res) => {
  const { lang = 'en-us' } = req.query;
  axios
    .get(
      `https://www.leagueoflegends.com/page-data/${lang}/champions/page-data.json`
    )
    .then((response) => {
      const data = response.data.result.data.allChampions.edges;
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

app.get('/api/champion', (req, res) => {
  const { championName, lang = 'en-us' } = req.query;
  console.log(championName, lang)
  axios
    .get(
      `https://www.leagueoflegends.com/page-data/${lang}/champions/${championName}/page-data.json`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
