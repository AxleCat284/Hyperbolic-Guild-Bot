const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const config = require('../../../config.json')

module.exports = {
    name: 'unstrike',
    description: 'unstrikes a staff member',
    options: [
        {
            name: 'name',
            description: 'discord Username',
            type: 6,
            required: true
        },
        {
            name: 'reason',
            description: 'reason for strike removal',
            type: 3,
            required: true
        },
        {
            name: 'number',
            description: 'the ammount of strikes they now have',
            type: 3,
            required: true
        }
      ],

 
      execute: async (interaction, client) => {
//
//

        const name = interaction.options.getUser("name")
        const reason = interaction.options.getString("reason")
        const number = interaction.options.getString("number")
        const strikelog = {
            title: 'Strike Log',
            description: (`**${name}** had there strike removed for **${reason}**, they now have ${number} strikes!`),
            timestamp: new Date().toISOString(),
            footer: {
                text: (`Hyperbolic Staff Team`),
            },
        };
        const discordlog = {
            title: 'Staff Strikes',
            description: (`${name} was unstriked!`),
            timestamp: new Date().toISOString(),
            footer: {
                text: (`Hyperbolic Staff Team`),
            },
        };
        if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.managementRole)) {
            await interaction.reply({embeds: [discordlog] })
            await client.channels.cache.get(config.channels.strikeChannel).send({embeds: [strikelog] })

        } else {
            await interaction.reply({ content: 'You do not have permission to run this command.', ephemeral: true })
        }
      }
    }
