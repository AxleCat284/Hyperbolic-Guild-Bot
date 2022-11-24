const config = require('../../../config.json')
const axios = require('axios')
const { getUUID, getUsername } = require('../../contracts/API/PlayerDBAPI');
const  hypixel = require('../../contracts/API/HypixelRebornAPI')
const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const   Utils  = require('hypixel-api-reborn');
const fs = require('fs')



module.exports = {
    name: 'hyperbolic',
    description: 'Sends Guild Stats',

    execute: async (interaction) => {
        const guild = await hypixel.getGuild("id", config.minecraft.guildID);
        const gm = guild.guildMaster 
        const res = (await axios.get(`https://sessionserver.mojang.com/session/minecraft/profile/${gm}/`)).data.name

        for (const member of guild.members) {
            const username = (await axios.get(`${config.api.playerDBAPI}/${member.uuid}`)).data.data.player.username
        
            fs.writeFileSync('../../../members.txt', `${username}`)
        };
        //logging "gmembers" because I need to see if it even outputs a non-uuid format

        
        
        

            const guildstats = {
                title: `Showing Guild Stats For: ${guild.name}`,
                description: (`\n**Guild Level**: ${guild.level}\n\n**Guild Discription**: \`${guild.description}\`\n\n**Guild Member Count**:  ${guild.members.length}/125\n\n**Guild Master**:  ${res}\n\n**Guild Creation Date**:  ${guild.createdAt}`),
                timestamp: new Date().toISOString(),
                footer: ({ text: `made by /credits  | /help [command] for more information`, iconURL: 'https://i.imgur.com/FeOykcL.png' })
                };
            
             await interaction.reply({ embeds: [guildstats] })
             await interaction.followUp({context: `${members}`})
            }
         }
  