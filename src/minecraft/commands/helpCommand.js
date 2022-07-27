const MinecraftCommand = require('../../contracts/MinecraftCommand')
process.on('uncaughtException', function (err) {console.log(err.stack)});

class InfoCommand extends MinecraftCommand {
  constructor(minecraft) {
    super(minecraft)

    this.name = 'info'
    this.aliases = ['help']
    this.description = 'Shows help menu'
    this.options = []
    this.optionsDescription = []
  }

  onCommand(username, message) {
    let temp = this;
    temp.send(`/gc https://imgur.com/xWyKJNA`)
  }
}

module.exports = InfoCommand

