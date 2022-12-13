const fs = require("fs");

module.exports = (client) => {
  client.handleCommands = (async) => {
    const commandFolders = fs.readdirSync("./commands");
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./commands`)
        .filter((file) => file.endsWith(".js"));

      const { commands, commandArray } = client;
      for (const file of commandFiles) {
        const command = require(`/commands/${folder}`);
        commands.set(command.data.name, command);
        commandArray.push(command.data.toJSON());
        console.log(
          `Command: ${command.data.name} has been passed through the handler`
        );
      }
    }
  };
};
