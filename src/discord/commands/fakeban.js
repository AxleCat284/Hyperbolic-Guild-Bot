const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const config = require('../../../config.json')

module.exports = {
    name: 'bam',
    description: 'bams a user',
    options: [
        {
            name: 'name',
            description: 'discord Username',
            type: 6,
            required: true
        },
        {
            name: 'reason',
            description: 'reason for strike',
            type: 3,
            required: true
        }
      ],

 
      execute: async (interaction, client) => {
//
//

        const name = interaction.options.getUser("name")
        const reason = interaction.options.getString("reason")

        const discordlog = {
            title: 'Bam Logs',
            description: (`${name} was bammed for ${reason}!`),
            timestamp: new Date().toISOString(),
            footer: {
                text: (`Hyperbolic Staff Team`),
            },
        };
        if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.qotdRole)) {
            await interaction.reply({embeds: [discordlog] })

        } else {
            await interaction.reply({ content: 'You do not have permission to run this command.', ephemeral: true })
        }
      }
    }
