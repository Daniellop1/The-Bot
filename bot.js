const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = config.prefix;

client.on('ready', () => {
  console.log('Logged in as Google Assistant [BETA]');
  client.user.setGame('The Helping Game.');
  console.log('Presence Changed.');
  console.log('-------');
});

client.on('message', message => {
  if(message == "Ok Google, what's the ping?") {
    message.reply(`The current ping is ${Date.now() - message.createdAt.getTime()}ms`);
  }
  if(message == "Ok Google, tell me a fact on cats") {
    let num = suffix;
    if(!num) {
      num = 1;
    }
    if(isNaN(num) || num < 1 || num > serverDocument.config.command_fetch_properties.max_count) {
      num = serverDocument.config.command_fetch_properties.default_count;
    }
    unirest.get(`http://catfacts-api.appspot.com/api/facts?number=${num}`).header("Accept", "application/json").end(res => {
      if(res.status == 200) {
        message.reply({ embed: {
          author: {
            name: "Did you know THAT fact about cats?",
            icon_url: bot.user.avatarURL,
            url: "https://github.com/GAssistant/The-Bot"
          },
          color: 0x00FF00,
          description: JSON.parse(res.body).facts.toString(),
          thumbnail: {
            url: "http://frid.li/uBqJB"
          }
       });
     } else {
      message.reply({ embed: {
       color: 0x9ECDF2,
       description: "My servers are starting to bug up. Please let the developers know."
     });
    }
  }
});
