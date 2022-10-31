module.exports = {
    name: 'online',
    description: 'List of online members.',
  
    execute: async (interaction, client) => {
        bot.chat(`/g online`)
        await interaction.reply({ content: 'Done.', ephemeral: false });
    }
  }
  