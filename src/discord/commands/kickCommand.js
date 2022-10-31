const config = require('../../../config.json')

module.exports = {
  name: 'kick',
  description: 'Kick the given user from the Guild.',
  options: [
    {
        name: 'name',
        description: 'Minecraft Username',
        type: 3,
        required: true
    },
    {
        name: 'reason',
        description: 'Reason',
        type: 3,
        required: true
    }
  ],

  execute: async (interaction, client) => {
    const name = interaction.options.getString("name")
    const reason = interaction.options.getString("reason")
    if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.commandRole)) {
        bot.chat(`/g kick ${name} ${reason}`); 
        await interaction.reply({ content: `${name} has been kicked from the guild for ${reason}`, ephemeral: true })

    } else {
        await interaction.reply({ content: 'You do not have permission to run this command.', ephemeral: true })
    }
  }
}
