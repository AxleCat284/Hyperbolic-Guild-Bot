process.on('uncaughtException', function (err) {console.log(err.stack)})
const express = require('express');
const webServer = require('./src/web/server.js');
const { port } = require('./OAuth2config.json');
const app = require('./src/Application');
const chalk = require ('chalk');


'use strict'
process.title = 'Hypixel Discord Chat Bridge'



const web = express();

web.get('/', (request, response) => {
  return response.sendFile('.src/oath/index.html', { root: '.' });
});

web.listen(port, () => console.log(chalk.bgGreen.black`App listening at http://localhost:${port}`));
console.log(chalk.red.bold.underline`Warning!! OATH2 is currently in development for hyperbolic and is not reccomended to be used for general use due to the fact it uses your hoster's ip to connect your bot to discord, contact myself to get a copy of the bot not including AOTH2 connections!!`);

app
  .register()   
  .then(() => {
    app.connect()
  }).catch(err => {
    console.error(err) 
  })