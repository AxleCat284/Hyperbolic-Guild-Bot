const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const config = require('../../../config.json')
module.exports = {
    name: 'dmuser',
    description: 'Dms A User',
    options: [
        {
            name: 'user',
            description: 'Username',
            type: 6,
            required: true
        },
        {
            name: 'message',
            description: 'Message you wish to send to the user',
            type: 3,
            required: true
        }
    ],
    execute: async (interaction, client) => {
      const user = interaction.options.getUser("user")
      const message = interaction.options.getString("message")
      const dmlog = {
          title: 'Automated message from Hyperbolic Staff',
          description: (`Hello**${user}**, ${message}`),
          timestamp: new Date().toISOString(),
          footer: {
              text: (`Hyperbolic Staff Team`),
          },
      };
      const discordlog = {
          title: 'dm user',
          description: (`${user} was messaged!`),
          timestamp: new Date().toISOString(),
          footer: {
              text: (`Hyperbolic Staff Team`),
          },
      };
      if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.commandRole)) {
          await interaction.followUp({embeds: [discordlog] })
          client.users.send(`${user.id}`, {embeds: [dmlog] } );
      } else {
          await interaction.followUp({ content: 'You do not have permission to run this command.', ephemeral: true })
      }
    }
  }

//MIKLE