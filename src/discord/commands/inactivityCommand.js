const config = require ('../../../config.json')
const { toFixed, addCommas, writeAt } = require('../../contracts/helperFunctions')
const { EmbedBuilder } = require("discord.js");
const { getUsername } = require('../../contracts/API/PlayerDBAPI');
const hypixel = require('../../contracts/API/HypixelRebornAPI');

const verifyEmbed = new EmbedBuilder()
    .setColor(15548997)
    .setAuthor({ name: 'An Error has occurred'})
    .setDescription(`You must link your account using \`/verify\` before using this command.`)
    .setFooter({ text: `made by /credits  | /help [command] for more information`, iconURL: 'https://i.imgur.com/FeOykcL.png' });


module.exports = {
    name: 'inactivity',
    description: 'Send an inactivity notice to the guild staff',
    options: [
        {
            name: 'time',
            description: 'How long will you be inactive for (in Days)',
            type: 3,
            required: true
        },
        {
            name: 'reason',
            description: 'Why are you going to be offline (optional)?',
            type: 3,
            required: false
        }
    ],
  
    execute: async (interaction, client) => {
        const linked = require('../../../data/discordLinked.json')
        const immunity = require('../../../data/guildKickImmunity.json')
        const reason = interaction.options.getString("reason") ?? 'None';
        const time = interaction.options.getString("time")*86400
        const expiration = toFixed((new Date().getTime()/1000 + time), 0)
		const uuid = linked?.[interaction?.user?.id]?.data[0]
        if (!uuid) interaction.reply({ embeds: [verifyEmbed] });

        if (interaction.options.getString("time") <= 14) {
            try {
                const username = await getUsername(uuid)
                hypixel.getGuild("id", config.minecraft.guildID).then(async guild => {
                    let found = false;
                    for (const member of guild.members) {
                        if (member.uuid === uuid) {
                            found = true
                            break
                        }
                    }

                    if (!found) {
                        const errorEmbed = new EmbedBuilder()
                            .setColor(15548997)
                            .setAuthor({ name: 'An Error has occurred'})
                            .setDescription(`You must be in the guild to use this command.`)
                            .setFooter({ text: `made by /credits  | /help [command] for more information`, iconURL: 'https://i.imgur.com/FeOykcL.png' });
                        await interaction.reply({embeds: [errorEmbed] });
                        return;
                    }

                    const inactivityEmbed = new EmbedBuilder()
                        .setColor(5763719)
                        .setAuthor({ name: 'Inactivity request.'})
                        .setThumbnail(`https://www.mc-heads.net/avatar/${username}`) 
                        .setDescription(`\`Username:\` ${username}\n\`Requested:\` <t:${toFixed(new Date().getTime()/1000, 0)}>\n\`Expiration:\` <t:${toFixed(expiration, 0)}:R>\n\`Reason:\` ${reason}`)
                        .setFooter({ text: `made by /credits  | /help [command] for more information`, iconURL: 'https://i.imgur.com/FeOykcL.png' });
                    await client.channels.cache.get(`${config.channels.inactivity}`).send({ embeds: [inactivityEmbed] });
                    
                    await writeAt('data/guildKickImmunity.json', `${uuid}.data`, [`${toFixed(expiration, 0)}`, `${uuid}`, `${username}`])

                    const inactivityResponse = new EmbedBuilder()
                        .setColor(5763719)
                        .setAuthor({ name: 'Inactivity request.'})
                        .setDescription(`Inactivity request has been successfully sent to the guild stafff.`)
                        .setFooter({ text: `made by /credits  | /help [command] for more information`, iconURL: 'https://i.imgur.com/FeOykcL.png' });
                    await interaction.reply({ embeds: [ inactivityResponse ] });
                })
            } catch (error) {
                const errorEmbed = new EmbedBuilder()
                    .setColor(15548997)
                    .setAuthor({ name: 'An Error has occurred'})
                    .setDescription(error)
                    .setFooter({ text: `made by /credits  | /help [command] for more information`, iconURL: 'https://i.imgur.com/FeOykcL.png' });
                await interaction.reply({ embeds: [errorEmbed] });
            }
        } else {
            const errorEmbed = new EmbedBuilder()
                .setColor(15548997)
                .setAuthor({ name: 'An Error has occurred'})
                .setDescription(`You cannot take break longer than 14 Days.`)
                    .setFooter({ text: `made by /credits  | /help [command] for more information`, iconURL: 'https://i.imgur.com/FeOykcL.png' });
            await interaction.reply({ embeds: [errorEmbed] });
        }


    },
  };