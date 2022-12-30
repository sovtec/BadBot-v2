const { InteractionType } = require("discord.js");

const { REST } = require("@discordjs/rest");
const { ROUTES } = require("discord-api-types/v9");

const { Events } = require("discord.js");

module.exports = {
  name: "InteractionCreate",
  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);
    /* const user = interaction.client.user(interaction.user); */

    if (!command) {
      console.error(
        `No command matching ${interaction.commandName} was found.`
      );
      return;
    }

    //??
    if (interaction.isChatInputCommand()) {
      const { commands } = client;
      const { commandName } = interaction;
      const command = commands.get(commandName);
    } else if (interaction.isButton()) {
      const { buttons } = client;
      const { customId } = interaction;
      const button = buttons.get(customId);
      if (!button) return new Error(`No button`);

      try {
        await button.execute(interaction, client);
      } catch (err) {
        console.log(err);
      }
    } else if (interaction.type == InteractionType.ModalSubmit) {
      const { modals } = client;
      const { customid } = interaction;
      const modal = modals.get(customid);
      if (!modal) return new Error("There is no code for this modal");

      try {
        await modal.execute(interaction, client);
      } catch (error) {
        console.error(error);
      }

      try {
        await command.execute(interaction);
      } catch (error) {
        console.error(`Error executing ${interaction.commandName}`);
        console.error(error);
      }
    }
  },
};
