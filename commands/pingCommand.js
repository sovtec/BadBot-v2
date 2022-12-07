const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong duh..!")
    .setDMPermission(false),
  async execute(interaction) {
    await interaction.reply("Pong!");
  },
};
