const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const config = require('../../../config.json')

module.exports = {
    name: 'emit',
    description: 'Emits a message',
    options: [
        {
            name: 'message',
            description: 'message to send',
            type: 3,
            required: true
        },

        
      ],
  
    execute: async (interaction, client, InteractionCreate) => {

    let message = interaction.options.getString('message').replaceAll('\\n', '\n')

    //if you're reading this dm me the word tomato <3

  if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.managementRole)) {

    interaction.channel.send(
        message
    )
    await interaction.followUp
    ({ 
        content: 'This is a reply message confirming your command was sent, please delete me!',
        ephemeral: true
    });

} else {
    await interaction.followUp({ content: 'You do not have permission to run this command.', ephemeral: true })
    }
}
};;