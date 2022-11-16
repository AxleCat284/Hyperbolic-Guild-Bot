const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const config = require('../../../config.json')

module.exports = {
    name: 'emitmc',
    description: 'Emits a message to guild chat',
    options: [
        {
            name: 'message',
            description: 'message to send',
            type: 3,
            required: true
        },
        
      ],
    execute: async (interaction, client, InteractionCreate) => {
  
  if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.managementRole)) {
    let message = interaction.options.getString('message').replaceAll('\\n', '\n')
    await bot.chat(`/gc ${message}`)
    interaction.reply({content: `Your message of ${message} has been sent!`, ephemeral: true})
  

} else {
    interaction.reply({ content: 'You do not have permission to run this command.', ephemeral: false})
    }
}
};;
