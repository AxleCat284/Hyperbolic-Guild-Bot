const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const config = require('../../../config.json')

module.exports = {
    name: 'kill',
    description: 'kills the bot',
  
    execute: async (interaction, client) => {
        if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.managementRole)) {
            await interaction.followUp({ content: 'Bot Killed :skull:', ephemeral: true })
            process.exit();
        } else {
            await interaction.followUp({ content: 'You do not have permission to kill the bot, please contact managment', ephemeral: true })
    }
}
}