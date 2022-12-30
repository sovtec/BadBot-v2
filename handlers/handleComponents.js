const { readdirSync } = require("fs");

module.exports = (client) => {
  client.handleComponents = async () => {
    const componentFolders = readdirSync(`./handlers`);
    for (const folder of componentFolders) {
      const componentFiles = readdirSync(`./handlers`).filter((file) =>
        file.endsWith(".js")
      );

      const { buttons, modals } = client;

      switch (folder) {
        case "commands":
          for (const file of componentFiles) {
            const button = require(`././components/${folder}/${file}`);
            buttons.set(button.data.name, button);
          }
          break;

        default:
          break;

        case "modals":
          for (const file of componentFiles) {
            const modal = require(`../components/${folder}/${file}`);
            modal.set(modal.data.name, modal);
          }
          break;
      }
    }
  };
};

client.handleComponents();
