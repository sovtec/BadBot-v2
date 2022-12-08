require("dotenv").config();

const fs = require("node:fs");
const path = require("node:path");
const EmbedBuilder = require("discord.js");
const { token } = require("./config.json");
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

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content:
        "There was an error while executing this command! tell hrdu he sucks!",
      ephemeral: true,
    });
  }
});

//This is being called from ready.js
/* client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
}); */

//Logs all messages for development purposes, this logging is heavy when alot of logs are being registered at once, not recomended to use to log messages

/* client.on("messageCreate", (message) => {
  console.log(
    `HR's Keylogger: ` +
      `${message.guild.name}/` +
      `${message.channel.name} - ` +
      `${message.createdAt} - ` +
      `${message.author.username}: ` +
      message.content
  );
}); */

client.login(process.env.BOT_TOKEN);
