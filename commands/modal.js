const {
  SlashCommandBuilder,
  ModalBuilder,
  ActionRowBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("modal")
    .setDescription("Make the bot say something!")
    .setDMPermission(false),
  async execute(interaction, client) {
    const modal = new ModalBuilder()
      .setCustomId(`displayAnswer`)
      .setTitle(`BotMsg`);

    const textInput = new TextInputBuilder()
      .setCustomId("showTextModal")
      .setLabel(`Write something here to make the bot say it!`)
      .setRequired(true)
      .setStyle(TextInputStyle.Short);

    modal.addComponents(new ActionRowBuilder().addComponents(textInput));

    await interaction.showModal(modal);
  },
};
