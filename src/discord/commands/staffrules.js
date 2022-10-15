
const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

module.exports = {
    name: 'staffrules',
    description: 'this is a private embed for the staff rules channel',
  
    execute: async (interaction, client) => {
    

const staffrules = {
	color: 0x0099ff,
	title: 'rules',
	description: 'now loading',
	timestamp: new Date().toISOString(),
	footer: {
		text: 'now loading',
	},
};

if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.managmentRole)) {
        await interaction.followUp({ embeds: [staffrules] });
  
	} else {
		await interaction.followUp({ content: 'You do not have permission to run this command.', ephemeral: true })
	}
    },
  };