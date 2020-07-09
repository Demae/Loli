module.exports = {
    name: 'mute',
    description: "mute",
    execute(msg, args){
        if(!msg.member.roles.cache.find(r => r.name === "Moderator")) return msg.channel.send("You don't have the necessary permissions")
        const ms = require('ms')
        let person = msg.guild.member(msg.mentions.users.first() || msg.guild.members.fetch(args[1]))
        if(!person) return msg.reply("Couldn't find that member!");

        let muterole = msg.guild.roles.cache.find(role => role.name === 'Muted');

        if(!muterole) return msg.reply("Couldn't find the 'Muted' Role");

        let time = args[2];

        if(!time){
            return msg.reply("You didn't specify a time!")
        }
        
        person.roles.add(muterole.id)

        msg.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`);

        setTimeout(function(){
            person.roles.remove(muterole.id);
            msg.channel.send(`@${person.user.tag} has been unmuted!`)
        }, ms(time));
    }
}