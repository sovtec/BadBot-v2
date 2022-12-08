const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");
const { execute } = require("./embeds");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("about")
    .setDescription("Opens Bot info"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Test embed 2")
      .setDescription("Description")
      .setColor("Blue")
      .setTimestamp(Date.now())
      .addFields([
        {
          name: `Field 1`,
          value: `Field 1 value`,
          inline: true,
        },
      ]);
    interaction.reply({
      embeds: [embed],
    });
  },
};
