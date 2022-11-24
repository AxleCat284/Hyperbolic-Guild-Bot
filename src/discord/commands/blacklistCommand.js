const config = require('../../../config.json')

module.exports = {
  name: 'blacklist',
  description: 'Blacklists the user from the bot',
  options: [
    {
        name: 'arg',
        description: 'Add or Remove',
        type: 3,
        required: true
    },
    {
        name: 'name',
        description: 'Minecraft Username',
        type: 3,
        required: true
    }
  ],

  execute: async (interaction, client) => {
    if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.managementRole)) {
        const name = interaction.options.getString("name")
        const arg = interaction.options.getString("arg")

        if (arg.toLowerCase() == "add") {
            bot.chat(`/ignore add ${name}`); 
            await interaction.reply({ content: `${name} added to the blacklist.`, ephemeral: true })
        } else if (arg.toLowerCase() == "remove") {
            bot.chat(`/ignore remove ${name}`); 
            await interaction.reply({ content: `${name} removed from the blacklist.`, ephemeral: true })
        } else {
            await interaction.reply({ content: 'Invalid Usage: \`/ignore [add/remove] [name]\`.', ephemeral: true })
        }

    } else {
        await interaction.reply({ content: 'You do not have permission to run this command.', ephemeral: true })
    }
  }
}
