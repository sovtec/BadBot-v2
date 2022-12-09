const { execute } = require("././commands/embedAbout.js");

module.exports = {
  data: {
    name: `testButton`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `https://google.com/`,
    });
  },
};
