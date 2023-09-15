const WristSpasmError = require("../../contracts/errorHandler.js");
const config = require("./../../../config.json");
const { EmbedBuilder } = require("discord.js");
const app = require("./../../Application.js");

module.exports = {
  name: "restart",
  description: "Restarts the bot.",

  execute: async (interaction) => {
    const user = interaction.member;
    if (
      config.discord.commands.checkPerms === true &&
      !(user.roles.cache.has(config.discord.commands.commandRole) || config.discord.commands.users.includes(user.id))
    ) {
      throw new WristSpasmError("You do not have permission to use this command.");
    }
    const restartEmbed = new EmbedBuilder()
      .setColor(15548997)
      .setTitle("Restarting...")
      .setDescription("The bot is restarting. This may take a few seconds.")
      .setFooter({
        text: `by @george_filos | /help [command] for more information`,
        iconURL: "https://imgur.com/tgwQJTX.png",
      });

    interaction.followUp({ embeds: [restartEmbed] });

    await bot.end("restart");
    await client.destroy();

    app.register().then(() => {
      app.connect();
    });

    const successfulRestartEmbed = new EmbedBuilder()
      .setColor(2067276)
      .setTitle("Restart Successful!")
      .setDescription("The bot has been restarted successfully.")
      .setFooter({
        text: `by @george_filos | /help [command] for more information`,
        iconURL: "https://imgur.com/tgwQJTX.png",
      });

    interaction.editReply({ embeds: [successfulRestartEmbed] });
  },
};
