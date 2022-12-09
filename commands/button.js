const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("button")
    .setDescription("Resturns button")
    .setDMPermission(false),
  async execute(interaction, client) {
    const button = new ButtonBuilder()
      .setCustomId(`testButton`)
      .setLabel(`Click me!`)
      .setStyle(ButtonStyle.Primary);

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(button)],
    });
    console.log("someone called the test button");
  },
};
