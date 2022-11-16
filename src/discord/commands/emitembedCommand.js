const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const config = require('../../../config.json')

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
            required: false
        }
        
      ],
  
    execute: async (interaction, client, InteractionCreate) => {

        const title = interaction.options.getString("title")
        let context = interaction.options.getString('context').replaceAll('\\n', '\n')
        const footer = interaction.options.getString("footer") || "hyperbolic"
       
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
        await interaction.reply({ content: 'This is a reply message confirming your command was sent, please delete me!', ephemeral: true });
        const emitlog = {
            title: `Embedded Message Emit Logs`,
            description: (`Title:\`${title}\`\nContext:\`${context}\`Footer:\`${footer}\`\n\nwas sent by:\n**Username**: ${interaction.user}\n**ID**: ${interaction.user.id}`),
            timestamp: new Date().toISOString(),
            footer: {text: `Hyperbolic Logging`,},
        };
        await client.channels.cache.get(config.channels.emitChannel).send({embeds: [emitlog] })

    } else {
        await interaction.reply({ content: 'You do not have permission to run this command.', ephemeral: true })
        }
    }
};;