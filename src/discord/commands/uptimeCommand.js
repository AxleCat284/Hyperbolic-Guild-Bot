const { toFixed } = require('../../contracts/helperFunctions')
const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "uptime",
    description: "Shows the uptime of the bot.",

    execute: async (interaction, client) => {
        const uptimeEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle("🕐 Uptime!")
            .setDescription(`Online since <t:${toFixed(uptime/1000, 0)}:R>`)
            .setFooter({ text: `made by /credits  | /help [command] for more information`, iconURL: 'https://i.imgur.com/FeOykcL.png' })

        interaction.reply({ embeds: [ uptimeEmbed ] })
    }
}