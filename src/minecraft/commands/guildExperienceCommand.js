const MinecraftCommand = require('../../contracts/MinecraftCommand')
const hypixel = require('../../contracts/API/HypixelRebornAPI')
const config = require('../../../config.json')

class guildExperienceCommand extends MinecraftCommand {
        constructor(minecraft) {
        super(minecraft)

        this.name = 'guildexp'
        this.aliases = ['gexp']
        this.description = "Guilds experience of specified user."
        this.options = ['name']
    }

    onCommand(username, message) {
        let arg = this.getArgs(message);
        if (arg[0]) username = arg[0]
        try {
            hypixel.getPlayer(username).then(player => {
                hypixel.getGuild("id", config.minecraft.guildID).then(guild => {
                    for (let i = 0; i < guild.members.length; i++) {
                        if (guild.members[i].uuid === player.uuid) {
                            const player = guild.members[i]
                            break;
                        }
                        if (i == guild.members.length-1) {
                            this.send(`/gc ${username} is not in the Guild.`)
                            return;
                        }
                    }

                    if (player.weeklyExperience < config.minecraft.guildExp) {
                        this.send(`/gc ${username} is missing ${config.minecraft.guildExp-player.weeklyExperience} Guild Experience.`)
                    }else {
                        this.send(`/gc ${username} has enough guild experience.`)
                    }
                    
                }).catch(error => {this.send('/gc ' + error.toString().replaceAll('[hypixel-api-reborn] ', ''))})
            }).catch(error => {this.send('/gc ' + error.toString().replaceAll('[hypixel-api-reborn] ', ''))})

        } catch (error) {
            console.log(i)
            this.send('There is no player with the given UUID or name or player has never joined Hypixel.')
        }
    }    
}

module.exports = guildExperienceCommand;