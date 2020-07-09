const Discord = require('discord.js')

module.exports = {
    name: 'help',
    description: "help",
    execute(msg, args){
        // inside a command, event listener, etc.
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Help')
            .setURL('')
            .setAuthor('Loli Bot', 'https://i.imgur.com/WOTjMbl.jpg', 'https://discord.js.org')
            .setDescription('All Commands for Loli Bot')
            .setThumbnail('https://i.imgur.com/WOTjMbl.jpg')
            .addFields(
                { name: 'Moderation', value: '`Ban/Unban`,`Clear`,\n`Kick`,`Mute`,`Slowmode`', inline: true  },
                { name: 'Info', value: '`God`,`Version`,`Ping`,\n`Discord`,`Members`', inline: true  },
                { name: 'Economy (soon)', value: '`Balance`,`Daily`,\n`Work`,`Give`,`Crime`', inline: true  },
            )

        msg.channel.send(exampleEmbed);
        }
    }

