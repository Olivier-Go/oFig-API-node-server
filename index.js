/* eslint-disable prefer-destructuring */
/*
 * Require
 */
const express = require('express');
const bodyParser = require('body-parser');
const Server = require('http').Server;

/*
 * Vars
 */
const app = express();
const server = Server(app);
const port = 3001;

/*
 * datas
 */
const games = require('./data/games');
const characters = require('./data/characters');

/*
 * Express
 */
app.use(bodyParser.json());
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  // response.header('Access-Control-Allow-Credentials', true);
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


// GET /
app.get('/', (request, response) => {
  response.send(`
    <div style="margin: 5em auto; width: 400px; line-height: 1.5; text-align: center;">
      <h1 style="text-align: center">oFig API</h1>
      <hr/>
      <p>Routes GET :</p>
      <ul style="display: inline-block; margin-top: .2em; list-style: none;">
        <li><a href="http://localhost:${port}/games"><code>http://localhost:${port}/games</code></a></li>
        <li><a href="http://localhost:${port}/characters"><code>http://localhost:${port}/characters</code></a></li>
      </ul>
      <hr/>
    </div>
  `);
});

// GET /games
app.get('/games', (request, response) => {
  response.send(games);
} );

// GET /characters
app.get('/characters', (request, response) => {
  response.send(characters);
} );

/*
 * Server
 */
server.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
