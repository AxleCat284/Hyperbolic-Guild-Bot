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
  
  if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.managementRole)) {

    let message = interaction.options.getString('message').replaceAll('\\n', '\n')
    await interaction.channel.send(`${message}`);
    await interaction.reply({content: "Success.", ephemeral: true})
    const emitlog = {
      title: `Normal Message Emit Logs`,
      description: (`Message:\n\`${message}\`\n\nwas sent by:\n**Username**: ${interaction.user}\n**ID**: ${interaction.user.id}`),
      timestamp: new Date().toISOString(),
      footer: {text: `Hyperbolic Logging`,},
  };
    await client.channels.cache.get(config.channels.emitChannel).send({embeds: [emitlog] })
  

} else {
    interaction.reply({ content: 'You do not have permission to run this command.', ephemeral: false})
    }
}
};;
