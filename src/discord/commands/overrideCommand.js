const config = require('../../../config.json')
const { EmbedBuilder } = require("discord.js")

module.exports = {
  name: 'override',
  description: 'Executes commands as the minecraft bot.',
  options: [
    {
        name: 'command',
        description: 'Minecraft Command',
        type: 3,
        required: true
    }
  ],

  execute: async (interaction, client) => {
    const name = interaction.options.getString("name")
    if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.commandRole)) {
        const command = interaction.options.getString("command");
        bot.chat(`/${command}`)
        const commandMessage = new EmbedBuilder()
            .setColor(2067276)
            .setTitle('Command has been executed successfully')
            .setDescription(`\`/${command}\`\n`)
            .setFooter({ text: `Made by AxleWitch#9171 | /help [command] for more information`, iconURL: 'https://i.imgur.com/FeOykcL.png' })
        await interaction.followUp({ embeds: [commandMessage], ephemeral: true  })

    } else {
        await interaction.followUp({ content: 'You do not have permission to run this command.', ephemeral: true })
    }
  }
}
