const config = require('../../../config.json')

module.exports = {
  name: 'invite',
  description: 'Invites the given user to the guild.',
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
        bot.chat(`/g invite ${name}`); 
        await interaction.reply({ content: `${name} Invited.`, ephemeral: false })

    } else {
        await interaction.reply({ content: 'You do not have permission to run this command.', ephemeral: false })
    }
  }
}
