const {
  SlashCommandBuilder,
  EmbedBuilder,
  Embed,
  User,
} = require("discord.js");

//deleted this folder
/* const { execute } = require("./embeds"); */

module.exports = {
  data: new SlashCommandBuilder()
    .setName("about")
    .setDescription("Open Bot info"),
  async execute(interaction, client) {
    const embedAbout = new EmbedBuilder()
      .setTitle("BadBot-v2")
      .setDescription('**A "nice" Discord bot created by __hrdu__**')
      .setThumbnail("https://i.imgur.com/xxemNry.png")
      .setColor(0x0099ff)
      .setTimestamp(Date.now())
      .setFooter({
        text: "BadBot",
        iconURL: "https://i.imgur.com/xxemNry.png",
      })
      .addFields(
        {
          name: "Features:",
          value:
            "Clear up to 99 messages\nView client ping\nCheck server info\nCheck user info",
        },
        {
          name: "Source:",
          value: "*__https://github.com/sovtec/BadBot-v2__*",
        },
        /* { name: "\u200B", value: "\u200B" }, */
        {
          name: "Commands:",
          value: "/about\n/avatar\n/ping\n/purge",
          inline: true,
        },
        {
          name: "\u200B",
          value: "/sushi\n/user\n/wat",
          inline: true,
        }
      );
    interaction.reply({
      embeds: [embedAbout],
    });
  },
};
