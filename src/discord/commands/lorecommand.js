const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

module.exports = {
    name: 'lore',
    description: 'Lore IDK',
  
    execute: async (interaction, client) => {
       
        const opinion = {
            title: 'Wacky Bible',
            description: 'His Exalted Majestic Magnanimous Excellency, the Great and Regal Emperor Wacky of the Proud and Honest Lands of Hyperbolic, the Commanding of the Realm of PP, King of the Domains of Knowledge and Clarity Bound With The Power Of The Stars And The Blood Of A God, Pure To The Soul, Second-in-command of Jujunonious, Dark Deity of the Dungeons of Truth, Benevolent Ruler of the Castle of Stars and Cosmos Held together with an immortal spell of unforgiving, hate and despair. Unbound to the very time our universe uses with the power of Mercury the God of thunder thy shall bring reckoning onto anything he touches, Dictator for the future and many more lives and words to come, manipulator of anger, angel of passion, God of triumph, Guardian of wings, giver of will and demon of love. He is the firstborn of Satan, God of the underworld and has been deemed worthy of ruling our mortal plane. So strong that all of the titans could not bear to withstand. He who Emerged from nothing yet everything at the same time. He who has a reason to rule everything. And those who stand against him will bow before his knees once he has  tired of their evil-doings. He stands above the mortal plane, seeing dimensions, no one, no being, no entity could even see. With the power of Almeida he can reach deep inside your soul no secret is safe he is the all seeing eye the watcher. The waiter. He will look into your soul so clearly no area will be left untouched, he is the slayer of God\'s, creator of worlds, scythe of death, teller of tales and creator of all life, observer of everything bringer of light and dark, of good and evil, of life and death, the veil of senses and the shadow of those who deceive, no mortal being can look at him in the 3rd dimension because he is above he is the 5th he is time and space of death and width of height and length no one will ever see him yet he sees all. ',
            timestamp: new Date().toISOString(),
            footer: {
                text: 'Hyperbolic',
            },
        };
        interaction.reply({ embeds: [opinion] });
  
    },
  };