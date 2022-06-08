const { SlashCommandBuilder } = require('@discordjs/builders');
// import Yiff from "yiff";
const Yiff = require('yiff');
const { MessageEmbed } = require('discord.js');
const yiff = new Yiff();
// no options are required, see below for the optionsj
// const e621 = new E621();
// const epost = new MessageEmbed()
//   .setThumbnail(e621.posts.search)
module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
    
    const tags = "werewolf male/male"
    const limit = 1
    //await interaction.reply("e621", tags, limit, yiff.e621(tags, limit))
    
    yiff.e621(tags, limit).then((r) => {console.log("e621", r)})
    const epost = new MessageEmbed()
     .setThumbnail(yiff.e621(tags, limit))
    await interaction.reply({ embeds: [epost] });
  },
};

//https://static1.e621.net/data/51/0d/510db36428d7282b3ce701a2f3ee2822.jpg