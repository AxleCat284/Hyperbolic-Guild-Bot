const MinecraftCommand = require('../../contracts/MinecraftCommand')

class reportCommand extends MinecraftCommand {
  constructor(minecraft) {
    super(minecraft)

    this.name = 'report'
    this.aliases = ['r']
    this.description = "Reports A User"
    this.options = ['username']
    this.optionsDescription = ['any user']
  }

  async onCommand(username, message) {
    username = this.getArgs(message)[0];
    try {
      this.send(`/wdr ${username}`)
      this.send(`Reported ${username}`)
    } catch (error) {
      console.log(error)
      this.send('/gc Something went wrong..')
    }
  }
}

module.exports = reportCommand
