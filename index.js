console.log(`Welcome.`)
console.log(`Loading has started, make sure you have set everything up. keep in mind if you see this message the bot has not "started" its just loading.`)
console.log(`.`)
console.log(`..`)
console.log(`...`)
console.log(`....`)
console.log(`.....`)
console.log(`......`)
process.on('uncaughtException', function (err) {console.log(err.stack)})
const express = require('express');
const chalk = require ('chalk');
const webServer = require('./src/web/server.js');
const { port } = require('./OAuth2config.json');
const app = require('./src/Application');


'use strict'
process.title = 'Hypixel Discord Chat Bridge'


console.log(chalk.blueBright` ██░ ██▓██   ██▓ ██▓███  ▓█████  ██▀███   ▄▄▄▄    ▒█████   ██▓     ██▓ ▄████▄  
▓██░ ██▒▒██  ██▒▓██░  ██▒▓█   ▀ ▓██ ▒ ██▒▓█████▄ ▒██▒  ██▒▓██▒    ▓██▒▒██▀ ▀█  
▒██▀▀██░ ▒██ ██░▓██░ ██▓▒▒███   ▓██ ░▄█ ▒▒██▒ ▄██▒██░  ██▒▒██░    ▒██▒▒▓█    ▄ 
░▓█ ░██  ░ ▐██▓░▒██▄█▓▒ ▒▒▓█  ▄ ▒██▀▀█▄  ▒██░█▀  ▒██   ██░▒██░    ░██░▒▓▓▄ ▄██▒
░▓█▒░██▓ ░ ██▒▓░▒██▒ ░  ░░▒████▒░██▓ ▒██▒░▓█  ▀█▓░ ████▓▒░░██████▒░██░▒ ▓███▀ ░
 ▒ ░░▒░▒  ██▒▒▒ ▒▓▒░ ░  ░░░ ▒░ ░░ ▒▓ ░▒▓░░▒▓███▀▒░ ▒░▒░▒░ ░ ▒░▓  ░░▓  ░ ░▒ ▒  ░
 ▒ ░▒░ ░▓██ ░▒░ ░▒ ░      ░ ░  ░  ░▒ ░ ▒░▒░▒   ░   ░ ▒ ▒░ ░ ░ ▒  ░ ▒ ░  ░  ▒   
 ░  ░░ ░▒ ▒ ░░  ░░          ░     ░░   ░  ░    ░ ░ ░ ░ ▒    ░ ░    ▒ ░░        
 ░  ░  ░░ ░                 ░  ░   ░      ░          ░ ░      ░  ░ ░  ░ ░      
        ░ ░                                    ░                      ░        
                                                                               `)

const web = express();

web.get('/', (request, response) => {
  return response.sendFile('.src/oath/index.html', { root: '.' });
});
web.listen(port, async () => console.log(chalk.bgGreenBright`[${await getCurrentTime()}] oAth2 >`) + chalk.redBright(`Website ready, port logged to ${port}`))
console.log(chalk.red.bold.underline`Warning!! OATH2 is currently in development for hyperbolic and is not reccomended to be used for general use due to the fact it uses your hoster's ip to connect your bot to discord, contact myself to get a copy of the bot not including AOTH2 connections!!`);

async function getCurrentTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  }
app
  .register()   
  .then(() => {
    app.connect()
  }).catch(err => {
    console.error(err) 
  })