const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

module.exports = {
    name: 'emitembed',
    description: 'Emits and embed',
    options: [
        {
            name: 'title',
            description: 'embed title (required)',
            type: 3,
            required: true
        },
        {
            name: 'context',
            description: 'the message that will be sent',
            type: 3,
            required: true
        },
        {
            name: 'footer',
            description: 'footer text',
            type: 3,
            required: true
        }
        
      ],
  
    execute: async (interaction, client, InteractionCreate) => {

        const title = interaction.options.getString("title")
        let context = interaction.options.getString('context').replaceAll('\\n', '\n')
        const footer = interaction.options.getString("footer")
       
        const chat = {
            title: `${title}`,
            description: (`${context}`),
            timestamp: new Date().toISOString(),
            footer: {
                text: `${footer}`,
            },
        };

        

     if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.managementRole)) {
        await interaction.channel.send({embeds: [chat] });
        await interaction.followUp({ content: 'This is a reply message confirming your command was sent, please delete me!', ephemeral: false });

    } else {
        await interaction.followUp({ content: 'You do not have permission to run this command.', ephemeral: true })
        }
    }
};;