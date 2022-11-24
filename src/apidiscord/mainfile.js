const fs = require("node:fs")
const path = require("node:path")
const CommunicationBridge = require('../contracts/CommunicationBridge');
const chalk = require ('chalk');
const Logger = require("../Logger");
const config = require("../../config.json");

// Require the necessary discord.js classes
class mainfile extends CommunicationBridge {
  constructor(app) {
    super();

    this.app = app;

  }
}


const {
  Client,
  Collection,
  GatewayIntentBits,
  ActivityType,
} = require("discord.js")

const { REST } = require("@discordjs/rest")
const { Routes } = require("discord.js")

// Create a new client instance
const client = new Client({
  partials: ["MESSAGE", "CHANNEL"],
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
  ],
})

// Login to Discord with your client's token
client.login(config.discord.token).catch(console.error)

// Read all command files from commands folder (__dirname is the current directory)
const commands = []
client.commands = new Collection()
const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"))

// Read command files and add them to the client.commands collection
for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file)
  const command = require(filePath)
  // Set a new item in the Collection
  // With the key as the command name and the value as the exported module
  client.commands.set(command.data.name, command)
  commands.push(command.data.toJSON())
}

// Create a new REST instance to register commands
const rest = new REST({ version: "10" }).setToken(config.discord.token)

// Register the commands by sending a PUT request to the Discord API
rest
  .put(Routes.applicationCommands(config.discord.clientID), {
    body: commands,
  })
  .then(() =>
    console.log(chalk.bgMagenta.black(`[${getCurrentTime()}] Discord >`) + ' ' + chalk.magentaBright(`Extra api commands found... loading...`))
  )
  .catch(console.error)
  function getCurrentTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  }

// When the client is ready, run this code (only once)
client.once("ready", () => {

  
  console.log(chalk.bgMagenta.black(`[${getCurrentTime()}] Discord >`) + ' ' + chalk.magentaBright(`Client ready, Extra Commands Loaded to Discord`))

  function getCurrentTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  }


  })


// React to chat interactions
client.on("interactionCreate", async (interaction) => {
  // discard interactions that are not commands
  if (!interaction.isChatInputCommand()) return

  // get the command name from the provided interaction object
  const command = client.commands.get(interaction.commandName)

  // do nothing if command is not found
  if (!command) return

  try {
    // Execute the command
    await command.execute(interaction)
    // Log command usage
    const timestamp = new Date().toLocaleString()
    console.log(
      Logger.discordMessage(`${interaction.user.username} - [${interaction.commandName}]`)
    )
  } catch (error) {
    console.error(error)
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    })
  }
})

module.exports = mainfile;