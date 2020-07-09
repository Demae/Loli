const Discord = require('discord.js')

module.exports = {
    name: 'members',
    description: "members",
    execute(msg, args){
        var guild = msg.guild.id
        var totalcount = msg.guild.memberCount
        var usercount = msg.guild.members.cache.filter(member => !member.user.bot).size;
        var botcount = msg.guild.members.cache.filter(member => member.user.bot).size;
        var onlinecount = msg.guild.members.cache.filter(member => member.presence.status === 'online').size;
        const discordEmbed = new Discord.MessageEmbed()
        .addFields(
            { name: 'Members', value: `${totalcount}`, inline: true  },
            { name: 'Online', value: `${onlinecount}`, inline: true  },
            { name: 'Humans', value: `${usercount}`, inline: true  },
            { name: 'Bots', value: `${botcount}`, inline: true  },
        )
        msg.channel.send(discordEmbed);
        }
    }