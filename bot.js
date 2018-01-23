const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = config.prefix;

client.on('ready', () => {
  console.log('Logged in as Google Assistant [BETA]');
  client.user.setGame('The Helping Game.");
  console.log('Presence Changed.');
  console.log('-------');
});

client.on('message', message => {
  if(message == "Ok Google, what's the ping?") {
    message.reply(`The current ping is ${Date.now() - message.createdAt.getTime()}ms`);
  }
});
