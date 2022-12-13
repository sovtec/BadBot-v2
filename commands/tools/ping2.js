const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping2")
    .setDescription("new config ping command")
    .setDMPermission(false),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true,
      ephemeral: true,
    });

    const newMessage = `Client Ping: ${
      message.createdTimestamp - interaction.createdTimestamp
    }`;
    await interaction.editReply({
      content: newMessage,
    });
  },
};
