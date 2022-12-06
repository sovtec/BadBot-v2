const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("purge")
    .setDescription("purge up to 99 messages.")
    .addIntegerOption((option) =>
      option.setName("amount").setDescription("Number of messages to purge")
    ),
  async execute(interaction) {
    const amount = interaction.options.getInteger("amount");

    if (amount < 1 || amount > 99) {
      return interaction.reply({
        content: "You need to input a number between 1 and 99.",
        ephemeral: true,
      });
    }
    await interaction.channel.bulkDelete(amount, true).catch((error) => {
      console.error(error);
      interaction.reply({
        content: "There was an error trying to purge messages in this channel!",
        ephemeral: true,
      });
    });

    return interaction.reply({
      content: `Successfully purged \`${amount}\` messages.`,
      ephemeral: true,
    });
  },
};
