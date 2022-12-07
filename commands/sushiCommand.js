const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sushi")
    .setDescription("Fishyyy")
    .setDMPermission(false),
  async execute(interaction) {
    await interaction.reply(
      "https://tenor.com/view/pog-pogfish-fish-openmouth-gif-20357594"
    );
  },
};
