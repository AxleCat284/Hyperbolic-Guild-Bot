const { EmbedBuilder } = require("discord.js")

module.exports = {
  name: "ping",
  description: "Shows the latency of the bot.",

  execute: async (interaction, client) => {
    const embed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle("🏓 Pong!")
      .setDescription(`Latency: ${client.ws.ping}ms`)
      .setFooter({ text: `made by /credits  | /help [command] for more information`, iconURL: 'https://i.imgur.com/FeOykcL.png' })
      
    interaction.followUp({ embeds: [embed] })
  },
};