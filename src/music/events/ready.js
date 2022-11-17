const chalk = require ('chalk');
module.exports = async (client) => {
    console.log(chalk.bgYellow.black(`[${await getCurrentTime()}] Music >`) + ' ' + chalk.yellow(`Client ready, logged in as Hyperbolic Music`));
    async function getCurrentTime() {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
      }
    client.user.setActivity(client.config.app.playing);

    
};
