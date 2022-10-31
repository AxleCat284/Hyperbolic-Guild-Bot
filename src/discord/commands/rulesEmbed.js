
const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const config = require('../../../config.json')

module.exports = {
    name: 'rulesembed',
    description: 'this is a private embed for the rules channel',
  
    execute: async (interaction, client) => {
    

const rules = {
	color: 0x0099ff,
	title: 'Rules',
	description: '1. Be respectful to all the members and treat everyone equally.\nIf you have personal beef with them please sort it out in your Private Messages.\n\n2. No Spamming.\nIf you are ever caught spamming, it will result in a MUTE or a BAN from the server. (This includes but is not limited to ping, caps and emoji spam)\n\n3. Direct & Indirect Threats\nThreats to other users of DDoS, Death, DoX, abuse, and other malicious threats are absolutely prohibited and disallowed.\n\n4. No discriminating against any race, gender, or religious beliefs.\n\n5. Keep religion and political beliefs to yourself.\n\n6. Follow the Discord Community Guidelines and Terms of Service\n\n7. No Advertising. This includes Discord Servers, Guilds, Youtube Videos, our Official Services or any sort of Content.\n\n8. English ONLY\n\n9. Attempting to impersonate our service or staff teams will result in a permanent ban.\n\n10. Do not ping any <@&1031366025427550312>\n\n11. Do not post discord crashers in any channel. Posting them will result in a temporary ban.\n\n12. Scamming and attempting to IRL Trade/Make IRL Trading Offers will result in an instant ban. Streaming cheats can lead to a mute or ban, depending on your punishment history.\n\n13. Do not mass ping or attempt to mass ping.',
	timestamp: new Date().toISOString(),
	footer: {
		text: 'All Punishment Durations are Staffs Discretion.\nStaff reserves the right to warn, mute, or ban for offenses/situations not explicitly listed. Use your common sense.\nAll these rules apply in Text Channels and Voice Channels.',
	},
};

if ((await interaction.guild.members.fetch(interaction.user)).roles.cache.has(config.discord.managementRole)) {
	await client.channels.cache.get(config.channels.rulesChannel).send({ embeds: [rules] })


	const reply = {
		title: (`Rules Embed`),
		description: (`Rules embed sent/updated!`),
		timestamp: new Date().toISOString(),
		footer: {
			text: (`Hyperbolic QOTDS`),
		},
	};
	await interaction.reply({embeds: [reply] })
  
	} else {
		await interaction.reply({ content: 'You do not have permission to run this command.', ephemeral: false })
	}
    },
  };