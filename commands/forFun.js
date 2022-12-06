const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("wat")
    .setDescription("ooooh, what is thiiiiis? :O"),
  async execute(interaction) {
    await interaction.reply({
      content: "Nothing, just a random command. Hail hrdu! :*",
      ephemeral: true,
    });
  },
};
