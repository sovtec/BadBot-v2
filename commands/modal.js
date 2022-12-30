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
    .setDescription("Returns modal")
    .setDMPermission(false),
  async execute(interaction, client) {
    const modal = new ModalBuilder().setCustomId(`hmm`).setTitle(`Sup biatch!`);

    const textInput = new TextInputBuilder()
      .setCustomId(`hmmInput`)
      .setLabel(`What is love, baby don't hurt me.`)
      .setRequired(true)
      .setStyle(TextInputStyle.Short);

    modal.addComponents(new ActionRowBuilder().addComponents(textInput));

    await interaction.showModal(modal);
  },
};
