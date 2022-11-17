
const config = require('../../../config.json')
const ms = require('ms');
const hypixel = require('../../contracts/API/HypixelRebornAPI')
const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

module.exports = {
    name: 'stats',
    description: 'shows the guild and your current stats',
    options: [{
        name: 'mcname',
        description: 'Minecraft Username',
        type: 3,
        required: true
      }],

    execute: async (interaction, client) => {
        const username = interaction.options.getString("mcname");
        const guild =  hypixel.getGuild("id", config.minecraft.guildID)
  
        {
            await hypixel.getPlayer(username).then(async player => {
                let found = false;
                player.socialMedia.forEach(media => {if (media.link === interaction.user.tag) {found = true}})
                if (found) {
                    (await interaction.guild.members.fetch(interaction.user)).roles.add(interaction.guild.roles.cache.get(config.discord.linkedRole))
                }
                })  
            }            
    
        const stats = {
            title: `Showing stats for ${interaction.guild.name}`,
            description: (
                `**Main Bot Name**: <@${config.discord.clientID}>\n**Minecraft Bot IGN**: ${bot.username}\n**Music Bot Name**: <@${config.discord.clientID2}>\n**Bot Latency**: \`${client.ws.ping}\` ms\n**Last Heartbeat Calculated**: ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} ago\n**Your Tag**: ${interaction.user}\n**Your ID** ${interaction.user.id}\n**Hypixel Media Linked**: \`depricated\`\n**Your Account Is Linked To**:  ${username}\n\n**Channel Info**:\nGuild Bridge: <#${config.discord.guildChatChannel}>\nOfficer Bridge: <#${config.discord.officerChannel}>\nQOTD Channel: <#${config.channels.qotdChannel}>\nSuggestions Channel: <#${config.channels.suggestionChannel}>\nRules Channel: <#${config.channels.rulesChannel}>\n\n**The Time For You Right Now**: ${new Date()}\n\n**Discord Invite**: ${config.discord.supportServerURL}\n**Guild Name And Tag**: **${config.minecraft.guildNAME}** ${config.minecraft.guildTAG}\n**Guild Roles**: **${config.minecraft.guildROLES}**\n**Guild Level**: ${guild.level}\n**Guild Members**: ${guild.members}
                `),
            timestamp: new Date().toISOString(),
            footer: {text: `made by /credits  | /help [command] for more information`, iconURL: 'https://i.imgur.com/FeOykcL.png'},
                };
        await interaction.reply({ embeds: [stats] })
            }
  }
  