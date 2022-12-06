require("dotenv").config();
const { token } = require("./config.json");
const path = require("node:path");
const fs = require("node:fs");
const {
  Client,
  GatewayIntentBits,
  Collection,
  messageLink,
  User,
  Events,
} = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});

client.commands = new Collection();
const eventsPath = path.join(__dirname, "events");
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

//This is being called from ready.js
/* client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
}); */

//Logs all messages for testing purposes
client.on("messageCreate", (message) => {
  console.log(`Keylog: ` + `${client.user.tag}: ` + message.content);
});

client.login(process.env.BOT_TOKEN);
