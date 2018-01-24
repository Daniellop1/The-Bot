const Discord = require("discord.js");
const config = require("./config.json");
const unirest = require("unirest");
const client = new Discord.Client();
const prefix = config.prefix;

var knock = function() {
  var joke = jokes[Math.floor(Math.random() * jokes.lengthz)]
  return formatJoke(joke)
}

function formatJoke(joke) {
  return [
    'Knock, knock.',
    'Who\'s there?',
    joke.name + '.',
    joke.name + ' who?',
    joke.name + ' ' + joke.answer
  ].join('\n')
}

var jokes = [
    { name: 'Dozen', answer: 'anybody want to let me in?' },
    { name: 'Avenue', answer: 'knocked on this door before?' },
    { name: 'Ice Cream', answer: 'if you don\'t let me in!' },
    { name: 'Adore', answer: 'is between us. Open up!' },
    { name: 'Lettuce', answer: 'in. Its cold out here!' },
    { name: 'Bed', answer: 'you can not guess who I am.' },
    { name: 'Al', answer: 'give you a kiss if you open the door.' },
    { name: 'Olive', answer: 'you!' },
    { name: 'Abby', answer: 'birthday to you!' },
    { name: 'Rufus', answer: 'the most important part of your house.' },
    { name: 'Cheese', answer: 'a cute girl.' },
    { name: 'Wanda', answer: 'hang out with me right now?' },
    { name: 'Ho-ho.', answer: 'You know, your Santa impression could use a little work.' },
    { name: 'Mary and Abbey.', answer: 'Mary Christmas and Abbey New Year!' },
    { name: 'Carmen', answer: 'let me in already!' },
    { name: 'Ya', answer: 'I’m excited to see you too!' },
    { name: 'Scold', answer: 'outside—let me in!' },
    { name: 'Robin', answer: 'you! Hand over your cash!' },
    { name: 'Irish', answer: 'you a Merry Christmas!' },
    { name: 'Otto', answer: 'know whats taking you so long!' },
    { name: 'Needle', answer: 'little help gettin in the door.' },
    { name: 'Luke', answer: 'through the keyhole to see!' },
    { name: 'Justin', answer: 'the neighborhood and thought Id come over.' },
    { name: 'Europe', answer: 'No, you are a poo' },
    { name: 'To', answer: 'To Whom.' },
    { name: 'Etch', answer: 'Bless You!' },
    { name: 'Mikey', answer: 'doesnt fit through this keyhole' }
]

client.on('ready', () => {
  console.log('Logged in as Google Assistant [BETA]');
  client.user.setGame('The Helping Game.');
  console.log('Presence Changed.');
  console.log('-------');
});

client.on('message', message => {
  if(message == "Ok Google, what's the ping") {
    message.reply(`The current ping is ${Date.now() - message.createdAt.getTime()}ms`);
  }
  if(message == "Ok Google, tell me a joke") {
    message.reply(knock());
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
