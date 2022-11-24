const chalk = require ('chalk');
module.exports = async (client) => {
  console.log(chalk.bgMagenta.black(`[${await getCurrentTime()}] Discord >`) + ' ' + chalk.magenta(`Music Commands Ready For Client`));
    async function getCurrentTime() {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
      }
    client.user.setActivity(client.config.app.playing);

    
};
