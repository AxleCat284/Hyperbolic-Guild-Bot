const config = require('../../../config.json')

module.exports = {
  name: 'mute',
  description: 'Mutes the given user for a given amount of time.',
  options: [
    {
        name: 'name',
        description: 'Minecraft Username',
        type: 3,
        required: true
    },
    {
        name: 'time',
        description: 'Time',
        type: 3,
        required: true
    }
  ],

  execute: async (interaction, client) => {
    const name = interaction.options.getString("name")
    const time = interaction.options.getString("time")
    if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.commandRole)) {
        bot.chat(`/g mute ${name} ${time}`); 
        await interaction.reply({ content: `${name} has been muted for ${time}.`, ephemeral: false })

    } else {
        await interaction.reply({ content: 'You do not have permission to run this command.', ephemeral: false })
    }
  }
}
