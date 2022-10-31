const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle,ThreadManager } = require('discord.js')
const config = require('../../../config.json')

module.exports = {
    name: 'qotd',
    description: 'question of the day',
    options: [
        {
            name: 'number',
            description: 'question number',
            type: 3,
            required: true
        },
        {
            name: 'question',
            description: 'question perams',
            type: 3,
            required: true
        }
    ],

 
      execute: async (interaction, client) => {
//
//

        const number = interaction.options.getString("number")
        const question = interaction.options.getString("question")
        

        if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.qotdRole)) {
            await client.channels.cache.get(config.channels.qotdChannel).send({content: `<@&${config.discord.qotdPING}>\n**QOTD #${number}**\n\n${question} \n\n⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\nIf you have any suggestions for the next QOTD, post them in <#${config.channels.suggestionChannel}>\nRemember to answer in the linked Thread!\n⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯` })
            const channel = client.channels.cache.get(config.channels.qotdChannel)
            const thread = await channel.threads.create({
                name: (`QOTD ${number}`),
                autoArchiveDuration: 60,
                reason: (`Awnsers for QOTD #${number}`),
            });
            const reply = {
                title: (`QOTD #${number}`),
                description: (`[QOTD](https://discord.com/channels/859982166673588246/995345638571135157) Sent\nCreated Thread **${thread.name}**`),
                timestamp: new Date().toISOString(),
                footer: {
                    text: (`Hyperbolic QOTDS`),
                },
            };
            await interaction.reply({embeds: [reply] })
        } else {
            await interaction.reply({ content: 'You do not have permission to run this command.', ephemeral: true })
        }
      }
    }
