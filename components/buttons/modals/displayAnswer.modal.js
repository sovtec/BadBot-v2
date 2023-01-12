module.exports = {
  data: {
    name: `displayAnswer`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `Whatnow? ${interaction.fields.getTextInputValue(
        "showTextModal"
      )}`,
    });
  },
};
