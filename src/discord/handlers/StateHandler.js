const config = require('../../../config.json')
const Logger = require('../../Logger')

class StateHandler {
  constructor(discord) {
    this.discord = discord
  }

  async onReady() {
    Logger.discordMessage('Client ready, logged in as ' + this.discord.client.user.tag)
    //this.discord.client.user.setActivity('Guild Chat', { type: 'WATCHING' })

    if (config.discord.messageMode == 'webhook') {
      this.discord.webhook = getWebhook(this.discord, 'Guild')
    }

    this.discord.client.channels.fetch(config.discord.guildChatChannel).then(channel => {
      channel.send({
        embeds: [{
          author: { name: `Chat Bridge is Online` },
          color: '47F049'
        }]
      })
    })
  }

  onClose() {
    this.discord.client.channels.fetch(config.discord.guildChatChannel).then(channel => {
      channel.send({
        embeds: [{
          author: { name: `Chat Bridge is Offline` },
          color: 'F04947'
        }]
      }).then(() => { process.exit() })
    }).catch(() => { process.exit() })
  }
}

async function getWebhook(discord, type) {
  let channel = discord.client.channels.cache.get(config.discord.guildChatChannel)
  if (type == 'Officer') {channel = discord.client.channels.cache.get(config.discord.officerChannel)}

  let webhooks = await channel.fetchWebhooks()
  if (webhooks.first()) {
    return webhooks.first()
  } else {
    var res = await channel.createWebhook(discord.client.user.username, {
      avatar: discord.client.user.avatarURL(),
    })
    return res
  }
}

module.exports = StateHandler
