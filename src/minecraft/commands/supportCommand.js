const MinecraftCommand = require('../../contracts/MinecraftCommand')

class supportCommand extends MinecraftCommand {
  constructor(minecraft) {
    super(minecraft)

    this.name = 'modhelp'
    this.aliases = ['helpOP', 'help', 'mod', 'support']
    this.description = "no"
    this.options = ['message']
    this.optionsDescription = ['message to send']
  }

  async onCommand(arg, message) {
 
     arg = this.getArgs(message)[1];
    try {
        this.send(`/gc Pinged mods for ${arg}`)
    } catch (error) {
      console.log(error)
      this.send('/gc Something went wrong..')
    }
  }
}



module.exports = supportCommand;