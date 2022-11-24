
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});
const config = require('./config.json')

client.login(config.discord.token)

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`)
    let guild = await client.guilds.fetch(config.discord.serverID)
    console.log(`Deleting ${guild.commands.size} commands`)
    await guild.commands.set([]).then(console.log)
    client.destroy()
})