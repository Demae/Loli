var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
const discord = require('discord.js');
const { config } = require('discord.js');
const fs = require('fs');
const bot = new discord.Client();

const client = new discord.Client();

bot.commands = new discord.Collection();

const commandFiles = fs
	.readdirSync('./commands/')
	.filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	bot.commands.set(command.name, command);
}

const token = process.env.token;

const PREFIX = process.env.prefix1

var version = '1.0.1';

var delete1 = 1;

var delayInMilliseconds = 5000; //1 second

bot.on('ready', () => {
	console.log('This bot is online!');
	bot.user
		.setActivity('l!help', {
			type: 'STREAMING',
			url: 'https://twitch.tv/xdLeachy'
		})
		.catch(console.error);
});

bot.on('guildCreate', guild => {
	const channel = guild.channels.cache.find(channel => channel.type === 'text');
	channel.send(
		"Thanks for inviting me, please make sure that:\nModerator Role: To Use the Admin Functions\nMuted Role: To Mute People\nThat the Loli Role is on the top!\nThat's all and enjoy"
	);
});

bot.on('message', msg => {
    if (msg.content.toLowerCase() == "kiet") {
    msg.channel.send("Kiet is D.Va God!");
  }
    if (msg.content.toLowerCase() == "shree") {
    msg.channel.send("Shree is Jupiter God!");
  }
    if (msg.content.toLowerCase() == "adam") {
    msg.channel.send("Adam is Yuri God!");
  }
    if (msg.content.toLowerCase() == "soup") {
    msg.channel.send("We all love soup!");
  }
  if (msg.content.toLowerCase() == "sug my") {
    msg.channel.send("No!");
  }
    if (msg.content.toLowerCase() == "loli") {
    msg.channel.send("https://i.imgur.com/WOTjMbl.jpg");
  }
  if (msg.author.bot || !msg.content.startsWith(PREFIX)) return;
	const args = msg.content.slice(PREFIX.length).split(/ +/g);
	if (msg.channel.type === 'dm') {
		return;
	}

	switch(args[0].toLowerCase()) {
		case 'god':
			bot.commands.get('god').execute(msg, args);
			break;
		case 'discord':
			bot.commands.get('discord').execute(msg, args);
			break;
		case 'cases':
			bot.commands.get('cases').execute(msg, args);
			break;
		case 'ping':
			bot.commands.get('ping').run(client, msg, args);
			break;
		case 'members':
			bot.commands.get('members').execute(msg, args);
			break;
		case 'help':
			bot.commands.get('help').execute(msg, args);
			break;
		case 'version':
			bot.commands.get('version').execute(msg, args);
			break;
		case 'kick':
			bot.commands.get('kick').execute(msg, args);
			break;
		case 'slowmode':
			bot.commands.get('slowmode').execute(msg, args);
			break;
		case 'mute':
			bot.commands.get('mute').execute(msg, args);
			break;
		case 'ban':
			bot.commands.get('ban').execute(msg, args);
			break;
		case 'clear':
			bot.commands.get('clear').execute(msg, args);
			break;
		case 'clearall':
			bot.commands.get('clearall').execute(msg, args);
			break;
		case 'play':
			bot.commands.get('play').run(client, msg, args);
			break;
		case 'leave':
			bot.commands.get('leave').run(client, msg, args);
			break;	
    	case 'unban':
      		bot.commands.get('unban').run(bot, msg, args);
			  break;
		case 'lock':
			bot.commands.get('lock').execute(msg, args);
			break;
	}
});
bot.login(token);
