const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const config = require('../../../config.json')
//
module.exports = {
    name: 'timeout',
    description: 'times a user out than logs it',
    options: [
        {
            name: 'user',
            description: 'discord Username',
            type: 6,
            required: true
        },
        {
            name: 'reason',
            description: 'reason for timeout',
            type: 3,
            required: true
        },
        {
            name: 'time',
            description: 'the ammount time that they will be timed out for',
            type: 3,
            required: true
        }
      ],

 
      execute: async (interaction, client) => {
//
//

        const user = interaction.options.getUser("user")
        const reason = interaction.options.getString("reason")
        const time = interaction.options.getString("time")*86400

          
        const timeoutlog = {
            title: 'Timeout Log',
            description: (`**${user}** was timed out for reason **${reason}**, they are timed out for ${time}!`),
            timestamp: new Date().toISOString(),
            footer: {
                text: (`Hyperbolic Staff Team`),
            },
        };
        const discordlog = {
            title: 'timeout',
            description: (`${user} was Timed out!`),
            timestamp: new Date().toISOString(),
            footer: {
                text: (`Hyperbolic Staff Team`),
            },
        };
        if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.commandRole)) {
            await interaction.followUp({embeds: [discordlog] })
            await this.guild.member.fetch({ user: `${user.id}`});
            await user.timeout.member(`${user.id}`),(`${time}`, 'They deserved it')
            await client.channels.cache.get(config.channels.strikeChannel).send({embeds: [timeoutlog] })

        } else {
            await interaction.followUp({ content: 'You do not have permission to run this command.', ephemeral: true })
        }
      }
    }

