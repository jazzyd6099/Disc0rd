const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});
client.on("message", (message) => {
  if (message.content.startsWith("Todoroki")) {
    message.channel.send("Yes? I heard my name.");
  } else
     if (message.content.startsWith("todoroki")) {
    message.channel.send("Hello, I heard my name.");
     } else
	if (message.content.startsWith("prefix?")) {
	  message.channel.send("Prefix for me is '.'");	 
	} else
		if (message.content.startsWith("I love my bot family")) {
			message.channel.send("Okay");
			} else
	 if (message.content == "I hate myself".toLowerCase() || message.content == "I hate myself." || message.content == "i hate myself".toLowerCase() || message.content == "i hate myself.".toLowerCase()){
			message.reply("Don't worry, I hate myself too.");
     }
});
const prefix = ".";
client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

 if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("What's a ping?");
	   } else
 if (message.content.startsWith(prefix + "hi todoroki")) {
    message.channel.send("Hello.");
	   } else
   if (message.content.startsWith(prefix + "help")) {
    message.channel.send("Okay, my commands so far are: (.)ping, (.)help, (.)hi todoroki, todoroki, and Todoroki. More will come soon.");
       }
});

client.login(process.env.BOT_TOKEN);
