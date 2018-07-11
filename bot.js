const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});
client.on("message", (message) => {
  if (message.content.startsWith("Todoroki")) {
    message.channel.send("Yes? I heard my name.");
  }
});
const prefix = ".";
client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

 if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("Ping? What's a ping?");
    } else
 if (message.content.startsWith(prefix + "hi todoroki")) {
    message.channel.send("Hello.");
 
       }

});

client.login(process.env.BOT_TOKEN);
