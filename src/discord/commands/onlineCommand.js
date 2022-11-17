module.exports = {
    name: 'online',
    description: 'List of online members.',
  //make it reply with the list
    execute: async (interaction, client) => {
        bot.chat(`/g online`)
        await interaction.reply({ content: 'Done.', ephemeral: false });
    }
  }
  