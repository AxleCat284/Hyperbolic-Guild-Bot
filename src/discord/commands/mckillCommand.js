const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const { killDaemon } = require('pm2')
const config = require('../../../config.json')
const EventHandler = require('../../contracts/EventHandler')

module.exports = {
    name: 'mckill',
    description: 'kills the mc bot',
  
    execute: async (interaction, client) => {
        if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.managementRole)) {
            await interaction.reply({ content: 'Minecraft bot killed!, **WARNING** YOU WILL NEED TO RESTART THE MAIN CONSOLE TO START THE BOT AGAIN.', ephemeral: false })
            bot.chat(`/gc [Minecraft Bot Killed!]`)
            console.log(`Minecraft bot killed.`)
            bot.quit()  

        } else {
            await interaction.reply({ content: 'You do not have permission to kill the bot, please contact managment', ephemeral: true })
    }
}
}