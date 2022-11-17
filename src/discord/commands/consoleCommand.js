module.exports = {
    name: 'consolesend',
    description: 'Sends data to console',
    options: [{
      name: 'data',
      description: 'The data you wish to send to the console',
      type: 3,
      required: true
    }],
  
    execute: async (interaction, client) => {
        const data = interaction.options.getString("data")
        console.log(data)
        await interaction.reply({ content: `\`${data}\` sent to dev console, check... console??!?`, ephemeral: false })
    },
  };