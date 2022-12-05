/* const {
  Client,
  GatewayIntentBits,
  Collection,
  messageLink,
} = require("discord.js");
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [GatewayIntentBits.Guilds],
});

client.on("ready", () => {
  console.log("All systems OK. BOT online!");
}); */

require("dotenv").config();

const {
  Client,
  GatewayIntentBits,
  Collection,
  messageLink,
  User,
} = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  console.log(`Keylog: ` + `${client.user.tag}: ` + message.content);
});

const { REST, Routes } = require("discord.js");
const { clientId, guildId, token } = require("./config.json");
const fs = require("node:fs");

const commands = [];
// Grab all the command files from the commands directory you created earlier
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

// Construct and prepare an instance of the REST module
const rest = new REST({ version: "10" }).setToken(token);

// and deploy your commands!
(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    );

    // The put method is used to fully refresh all commands in the guild with the current set
    const data = await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands }
    );

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    );
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
})();

/* client.on("messageCreate", (message) => {
  if (message.content === "!ping") {
    // send back "Pong." to the channel the message was sent in
    message.channel.send("Pong.");
  }
}); */

/* client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
}); */

/*const BOT_PREFIX = "!";
const MOD_ME_COMMAND = "mod-me";

client.on("messageDelete", (msg) => {
  msg.channel.send("Stop deleting messages");
});

client.on("message", (msg) => {
  if (msg.content == "I love WDS") {
    msg.react("❤️");
  }

  if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
    modUser(msg.member);
  }
});

function modUser(member) {
  member.roles.add("783084095223234590");
} */
