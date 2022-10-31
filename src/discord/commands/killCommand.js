const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const config = require('../../../config.json')

module.exports = {
    name: 'kill',
    description: 'kills the bot',
  
    execute: async (interaction, client) => {
        if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.managementRole)) {
            await interaction.reply({ content: 'Bot Killed :skull:', ephemeral: false })
            process.exit();
        } else {
            await interaction.reply({ content: 'You do not have permission to kill the bot, please contact managment', ephemeral: true })
    }
}
}