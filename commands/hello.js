const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Say hello to the creator!'),
	async execute(interaction) {
    //no idea how that works thats some fucking bullshit
    await interaction.client.channels.cache.get('982007233888022618').send(`${interaction.user.username} says hello!`);
		// await client.channels.cache.get("981985410102206515").send(`${interaction.user.username} says hello!`);
    await interaction.reply("Message sent to: Weed Cat#5959")
    //await interaction.reply(client)
    
	},
};