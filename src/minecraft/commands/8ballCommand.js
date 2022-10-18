const MinecraftCommand = require('../../contracts/MinecraftCommand')
const axios = require('axios')

class eightBallCommand extends MinecraftCommand {
  constructor(minecraft) {
    super(minecraft)

    this.name = '8ball'
    this.aliases = ['8b']
    this.description = "Ask an 8ball a question."
    this.options = ['question']
    this.optionsDescription = ['Any kind of question']
  }

  onCommand(username, message) {
    try {
      this.send(`/gc I am unsure how to awnser this command right now, please check in later! -devs`)
    } catch (error) {
      console.log(error)
      this.send('/gc Something went wrong..')
    }
  }
}

module.exports = eightBallCommand