const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const config = require('../../../config.json')
const EventHandler = require("../../contracts/EventHandler");
const Logger = require("../../Logger");

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
    let message = interaction.options.getString('message')
    await bot.chat(`/gc ${message}`)
    interaction.reply({content: `Your message of \`${message}\` has been sent!`, ephemeral: true})
    const emitlog = {
      title: `Minecraft Message Emit Logs`,
      description: (`Message:\n\`${message}\`\n\nwas sent by:\n**Username**: ${interaction.user}\n**ID**: ${interaction.user.id}\n**To Minecraft IGN**:${bot.username}`),
      timestamp: new Date().toISOString(),
      footer: {text: `Hyperbolic Logging`,},
  };
    await client.channels.cache.get(config.channels.emitChannel).send({embeds: [emitlog] })

} else {
    interaction.reply({ content: 'You do not have permission to run this command.', ephemeral: false})
    }
}
};;
