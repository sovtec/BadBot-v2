module.exports = {
  data: {
    name: `Hmm`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `Whatnow? ${interaction.fields.getTextInputValue("hmmInput")}`,
    });
  },
};
