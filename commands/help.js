const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const exampleEmbed = new MessageEmbed()
	.setColor('#028b05')
	.setTitle('Help Menu')
	.setURL('https://discord.gg/AR5mFT2qdD')
	.setAuthor({ name: 'Weed Cat#5959', iconURL:  })
	.setDescription('**[REQUIRED]**\n**{OPTIONAL}**\n\nAll Commands:')
  .setThumbnail()
	.addFields(
		{ name: '***/Hello***', value: 'Sends Hello to Weed Cat\'s server!'},
		{ name: '***/Ping***', value: 'Responds with Ping!'},
		{ name: '***/Beep***', value: 'Responds with Boop!'},
	)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Shows the help menu'),
	async execute(interaction) {
		await interaction.reply({ embeds: [exampleEmbed] });
  }
};