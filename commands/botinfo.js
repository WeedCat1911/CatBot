const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bot-info')
		.setDescription('Shows info about the bot!'),
	async execute(interaction) {
		return interaction.reply('g');
	},
};
