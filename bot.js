require("dotenv").config();

const { Client, GatewayIntentBits, Collection } = require("discord.js");
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [GatewayIntentBits.Guilds],
});

client.on("ready", () => {
  console.log("Herpaderp");
});

client.login(process.env.BOT_TOKEN);
