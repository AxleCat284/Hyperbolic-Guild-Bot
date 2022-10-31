
const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const config = require('../../../config.json')

module.exports = {
    name: 'faqembed',
    description: 'this is the private embed for FAQ channel',
  
    execute: async (interaction, client) => {
    
//In-guild roles

const faq = {
	color: 0x0099ff,
	title: `Welcome To Hyperbolic`,
	description: "",
    fields: [
        {
          name: `Who We Are`,
          value: `Hyperbolic was created on the 26th of September 2020  for a group of friends. Now in 2022, we are #1000 on the overall guild leaderboard.\n`
        },
        {
          name: `Thinking of joining?`,
          value: `Great! We love to see new people in our guild. If you think you have what it takes to join us, then create a ticket to join! It only few seconds!`
        },
        {
          name: `Our Guild Roles`,
          value: `In Hyperbolic, we have lots of roles that members can obtain as recognition for their hard work.\n\nDiscord Roles\n<@&1031366063516028948> - The default and lowest possible rank\n <@&1031366060953313340> - The rank for guild members\n<@&1031742366492663848> - Baka rank\n<@&1031724050852085801> - Elite rank\n<@&1031742570675572858> - Master rank\n<@&861098669734363156> - Discord Server Booster\n<@&1031366052107517952> Given to all boosters and donators\n<@&1031366050891169912> - Given to server boosters or giveaway donators\n<@&1031366047711895613> - Given to large donators`
		
        },
		{
			name: '** **',
			value: `\n\n\nGuild Roles\n<@&1031366026362896394> - Guild Master\n<@&1031366040120213544> - Hyperbolic Discord Bot\n<@&1031366027717652570> - Administrator\n<@&1031366029001113650> - Jr. Administrator\n<@&1031366031316361266> Sr. Moderator\n<@&1031366032197173248> - Moderator\n<@&1031366033350602855> - Helper\n<@&1031740502153887825> - Development Team\n\nExtra Roles\n<@&1031366060064120912> - Discord / Guild Offical Server Partner\n<@&1031366059233640538> - Former Guild Staff`
		},
        {
          name: `Donator Information`,
          value: `**1)** Skyblock Coin/Nitro/Giveaway Donations are non-refundable. \n\n2) Violation of <#860034326719627305> may result in some or all of your perks getting revoked.\n\n**3)** Server booster perks only are only given out when you are boosting, all perks will be removed once you are no longer a booster\n\n**4)** If you attempt to scam staff or give them illegial coins/items you will be banned.`
        },
        {
          name: `Donator ranks`,
          value: `**Booster Role**: <@&1031366050891169912> \nBoost the server once OR donate 5m+\n- Displayed separately\n- Supporter role\n- Symbol beside your name\n- Custom Role\n- x4 entries in most giveaways\n- Gif/Image permissions in <#1031366104825741372>\n\n**Booster Role**: <@&1031366047711895613>\nBoost the server twice or donate 15m+\n- All above perks\n- Custom VC\n- Access to <#1031366103223509022>\n`
        }
      ],
	  
}
	const button = new ActionRowBuilder().addComponents(
		new ButtonBuilder()
		.setLabel('Tickets')
		.setURL('https://discord.com/channels/859982166673588246/1031366113000435783')
		.setStyle(ButtonStyle.Link),
	);
  
	


//allembeds
		await client.channels.cache.get('1031366096189653052').send({ embeds: [faq], components: [button] });

        await interaction.reply({ content: 'FAQ Sent!', ephemeral: true  });
  
    },
  };