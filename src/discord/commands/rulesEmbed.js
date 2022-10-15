
const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

module.exports = {
    name: 'rulesembed',
    description: 'this is a private embed for the rules channel',
  
    execute: async (interaction, client) => {
    

const hyperbolic = {
	color: 0x0099ff,
	title: 'rules',
	description: 'now loading',
	timestamp: new Date().toISOString(),
	footer: {
		text: 'now loading',
	},
};

if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.managmentRole)) {
        await interaction.followUp({ embeds: [hyperbolic] });
  
	} else {
		await interaction.followUp({ content: 'You do not have permission to run this command.', ephemeral: true })
	}
    },
  };