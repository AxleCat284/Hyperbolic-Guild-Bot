const config = require('../../../config.json')

module.exports = {
  name: 'unmute',
  description: 'Unmutes the given user.',
  options: [
    {
        name: 'name',
        description: 'Minecraft Username',
        type: 3,
        required: true
    }
  ],

  execute: async (interaction, client) => {
    const name = interaction.options.getString("name")
    if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.commandRole)) {
        bot.chat(`/g unmute ${name}`); 
        await interaction.reply({ content: `${name} has been unmuted!`, ephemeral: false })

    } else {
        await interaction.reply({ content: 'You do not have permission to run this command.', ephemeral: false })
    }
  }
}
