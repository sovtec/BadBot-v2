const { REST, Routes } = require("discord.js");
const { clientId, guildId, token } = require("./config.json");
const fs = require("node:fs");

const commands = [];
/* const embeds = []; */
// Grab all the command files from the commands directory you created earlier
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

/* for (embed of embeds) {
  const embeds = require(`.commands/.embeds/${file}`);
  embeds.push(embeds.data.toJSON());
} */

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

// Construct and prepare an instance of the REST module
const rest = new REST({ version: "10" }).setToken(token);

//Delete a command by id, run node deploy-commands.js to delete it properly (COMMANDID IS ID)
/* rest
  .delete(Routes.applicationCommand(clientId, "1050506254650441768"))
  .then(() => console.log("Successfully deleted a command"))
  .catch(console.error); */

// and deploy your commands!
(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    );

    // Adding guildId will result in "local" commands only registering in guild
    // The put method is used to fully refresh all commands in the guild with the current set
    const data = await rest.put(Routes.applicationCommands(clientId), {
      body: commands,
    });

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    );
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
})();

//deply from terminal with node "node deploy-commands.js"
