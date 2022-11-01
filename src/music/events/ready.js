const chalk = require ('chalk');
module.exports = async (client) => {
    console.log(chalk.bgYellow.black(`Music >`) + ' ' + chalk.yellow(`Client logged into Hyperbolic Music`));
    client.user.setActivity(client.config.app.playing);

    
};