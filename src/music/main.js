const { Player } = require('discord-player');
const { Client, GatewayIntentBits } = require('discord.js');
const config = require("../../config.json");
const CommunicationBridge = require('../contracts/CommunicationBridge');

class main extends CommunicationBridge {
    constructor(app) {
      super();
  
      this.app = app;
  
    }
}

global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ],
   disableMentions: 'everyone',
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader')
require('./src/events');

client.login(client.config.app.token);

module.exports = main;
