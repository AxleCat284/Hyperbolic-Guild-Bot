
const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

module.exports = {
    name: 'faqembed',
    description: 'this is the private embed for FAQ channel',
  
    execute: async (interaction, client) => {
    
//In-guild roles

const ingameroles = {
	color: 0x0099ff,
	title: 'In-Game Guild Ranks',
	description: '<@&860018913906393109> A member of the the guild: Hyperbolic\n<@&860683429887737896> The lowest rank possible in the guild (**15,000** weekly guild experience)\n<@&860018916624302130> **75,000+** weekly guild experience \n<@&860018915392749569> **150,000+** weekly guild experience\n** **\nPlease keep in mind that Once you obtain the <@&860018916624302130> rank, you only need to get **50,000** weekly guild experience to keep your rank. Once you get promoted to <@&860018915392749569>, you need **100,000** to keep it or you will be demoted! ',
	timestamp: new Date().toISOString(),
	footer: {
		text: 'Please keep in mind, if after 1 month you have gotten less than 15,000~ Guild EXP you will be kicked.',
	},
};

// MEE6 roles

const mee6roles = {
	title: 'roles',
	description: '⚠️❗️ **__When you join the discord please set you discord username to your minecraft IGN, otherwise, your in game guild rank and discord roles may not correspond with each other.__** ❗️⚠️',
	timestamp: new Date().toISOString(),
	footer: {
	text: 'owo'
	},
	fields: [
		{
			name: 'MEE6 Level Rewards',
			value: '<@&864620682913775632>  Perks:\n>  Change Nickname\n<@&864620750694514700> Perks:\n> Access to <#1023690617089429604>\n<@&864620918772596808> Perks:\n> Uploads in <#859982167374692354>\n<@&864621006128021555> Perks:\n> access to <#973660064059641916>\n<@&1023669000686805082> Perks:\n> Embed/Gif perms in <#859982167374692354>\n<@&864621111178559489> Perks:\n> access to <#1029136323283529829>\n> Access to <#1029136455160823928>\n<@&1028048831876710491> Perks:\n> Access to <#1028840759702597722> without being in the guild\n<@&864622101964259328> Perks:\n> 1 custom role (this is separate from booster rewards)\n<@&864621465395920956>\n> Custom VC\n<@&864621593627590657>\n> :sparkles: Coming soon :sparkles:'

		},
		{
			name: 'Booster Roles',
			value: '**Perks:**\n- <@&972465440284610570> Booster role\n- Displayed separately\n- Supporter role\n- Gain access to <#973660064059641916>\n- Symbol beside your name\n- Gif/Image permissions in <#859982167374692354>\n- Custom Role\n- x4 entries in most giveaways',
		},
		{
			name: 'Double Booster Role',
			value: '🟣 Double Nitro Booster: Boost the Server twice\nPerks:\n\n- all the above perks\n- <@&972465440284610570> role\n- Custom VC \n- Nickname Permission',
		},
		{
            name: 'Donator Roles',
            value: '**(3m+)**\n> <@&978396188971761684> Role\n> Supporter Role\n> Gif/Image Perms in <#859982167374692354>\n> x2 giveaway entries\n\n**(5m+)**\n> Previous Perks\n> Custom Role\n\n**(10m+)**\n> Previous Perks\n> Speak/Image Perms in <#1029136455160823928>\n\n**(20m+)**\n> Previous perks\n> <@&1000344928771121233> role\n> Custom VC\n> x3 giveaway entries\n\n**To donate, DM  <@793162371702194207>, <@797967951415345193>, <@790736254714642453> \nall donations will go to giveaways!**',
		},
		
	],
};

//irl donations

const irlstuff = {
	title: 'irl donations',
	description: '**Irl donations** dm <@790736254714642453>, all donations will go to running the bot, smp and other features.',
	timestamp: new Date().toISOString(),
	footer: {
	text: '<3'
	},
	fields: [
        {
			'name': '5.01-10$ USD (Devine)',
			'value': '> all Single and double booster perks \n> access to <#1029136455160823928>, <#1023690617089429604> and <#1028840759702597722>'
		  },
		  {
			'name': '10-25$ (Godlike)',
			'value': 'Perks:\n> <@&1030042367908130827> role\n> Previous Perks\n> All \'MEE6\' Perks 5-40'
		  },
		  {
			'name': '25-100$ (Spiritual)',
			'value': 'Perks:\n> <@&1030042503455449099> role\n> All \'MEE6\' Perks 5-100\n> Guild kick immunity'
		  },
		  {
			'name': '100+$         ᔑʖ𝙹⍊ᒷ 𝙹⚍∷ ᒲ𝙹∷ℸ ̣ ᔑꖎ !¡ꖎᔑ╎リ',
			'value': 'Perks:\n> <@&1030043590111526942> role\n> `||𝙹⚍ ⊣ᔑ╎リ ᔑᓵᓵᒷᓭᓭ ℸ ̣ 𝙹 ᒷ⍊ᒷ∷||ℸ ̣ ⍑╎リ⊣`'
		  },
		  {
			'name': 'Info',
			'value': '> After bot, smp, and other features have been paid. money donated will go to Nitro giveaways/Hypixel Giveaways\n> If you are looking to donate nitro (1 month) you will receive:\n>  Nitro Classic = Celebrity perks 1 month \n> Nitro With boosts = Devine perks for 1 month'
		  }
		],
	  };

//staff forms 

const staffapply = {
	title: 'How do I apply for staff?',
	description: 'When applications are open (announced in <#860033601927905311>) you can click the below links to apply!\n> Discord staff: [Click](https://forms.gle/ss57EifurpJBQTh76)\n> In-Game Staff: [Click](https://forms.gle/D7c5ju6weZH5kao97)\n> Youtube Production Team: [Click]( https://forms.gle/QBznpzz75BPhFEFF6)'
};

//allembeds
interaction.followUp({ embeds: [ingameroles, mee6roles, irlstuff, staffapply] });
  
    },
  };