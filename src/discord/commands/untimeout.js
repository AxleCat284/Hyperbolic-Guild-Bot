const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const config = require('../../../config.json')
//
module.exports = {
    name: 'untimeout',
    description: 'Removes a timeout from a member and then logs it',
    options: [
        {
            name: 'member',
            description: 'discord Username',
            type: 6,
            required: true
        }

      ],

 
      execute: async (interaction, client) => {
        const member = interaction.options.getMember("member")

   
        const timeoutlog = {
            title: 'Timeout Log',
            description: (`**${member} Had Their Timeout Removed!**\n\n**ID:** ${member.id}`),
            timestamp: new Date().toISOString(),
            footer: {
                text: (`Hyperbolic Staff Team`),
            },
        };
        const discordlog = {
            title: 'Timeout',
            description: (`${member} was removed from timeout!`),
            timestamp: new Date().toISOString(),
            footer: {
                text: (`Hyperbolic Staff Team`),
            },
        };

        if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.commandRole)) {
            await member.timeout(1);
            await interaction.reply({embeds: [discordlog] })
            await client.channels.cache.get(config.channels.timeoutChannel).send({embeds: [timeoutlog] })

        } else {
            await interaction.reply({ content: 'You do not have permission to run this command.', ephemeral: true })
        }
      }
    }

