const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

module.exports = {
    name: 'helpverify',
    description: 'helps with verifying ig',
  
    execute: async (interaction, client) => {
       
        const verify = {
            title: '✅How do I verify?',
            description: '**To verify, you need to run /verify <IGN> with Hyperbolic bot in** <#860024097450622986>.\nIF you get the error "your account is not linked" after doing the command, please make a ticket in <#994638383756366004> ',
            timestamp: new Date().toISOString(),
            footer: {
                text: 'Hyperbolic',
            },
        };
        interaction.followUp({ embeds: [verify] });
  
    },
  };