
const DiscordManager = require("./discord/DiscordManager")
const main = require("./music/main")
const mainfile = require("./apidiscord/mainfile")
const MinecraftManager = require("./minecraft/MinecraftManager");

class Application {
  async register() {
    this.discord = new DiscordManager(this);
    this.main = new main(this);
    this.mainfile = new mainfile(this);
    this.minecraft = new MinecraftManager(this);

    this.discord.setBridge(this.minecraft);
    this.minecraft.setBridge(this.discord);
  }

  async connect() {
    this.discord.connect();
    this.minecraft.connect();
  }
}

module.exports = new Application();
