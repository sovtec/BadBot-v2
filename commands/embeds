const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Returns a embed")
    .setDMPermission(false),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("This is an embed duhh..")
      .setDescription("Description")
      .setColor(0x18e1ee)
      .setImage(client.user.displayAvatarURL)
      .setThumbnail(client.user.displayAvatarURL)
      .setTimestamp(Date.now())
      .setAuthor({
        url: "https://google.com/",
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag,
      })({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag,
      })
      .setURL("https://youtube.com/")
      .addFields([
        {
          name: "Field 1",
          value: "Value field 1",
          inline: true,
        },
      ]);
  },
};

// Client is undefined..
// Use use interaction.client to fix this ??
