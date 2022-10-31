const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const config = require('../../../config.json')
const ms = require("ms");
//
module.exports = {
    name: 'timeout',
    description: 'Times out a member and then logs it',
    options: [
        {
            name: 'member',
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

        const member = interaction.options.getMember("member")
        const reason = interaction.options.getString("reason")
        const time = interaction.options.getString("time")
        const timeMS = ms(time)


          
        const timeoutlog = {
            title: 'Timeout Log',
            description: (`**${member} Was Timed Out!**\n\n**Reason:** ${reason}\n**Time:** ${time}\n\n**ID:** ${member.id}`),
            timestamp: new Date().toISOString(),
            footer: {
                text: (`Hyperbolic Staff Team`),
            },
        };
        const discordlog = {
            title: 'Timeout',
            description: (`${member} was timed out for **${time}**!`),
            timestamp: new Date().toISOString(),
            footer: {
                text: (`Hyperbolic Staff Team`),
            },
        };

        if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.commandRole)) {

            await member.timeout(timeMS, `${reason}`);
            await interaction.reply({embeds: [discordlog] })
            await client.channels.cache.get(config.channels.timeoutChannel).send({embeds: [timeoutlog] })
        } else {
            await interaction.reply({ content: 'You do not have permission to run this command.', ephemeral: true })
        }
      }
    }

