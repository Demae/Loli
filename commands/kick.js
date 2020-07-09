module.exports = {
    name: 'kick',
    description: "kick",
    execute(msg, args){
        if(!msg.member.roles.cache.find(r => r.name === "Moderator")) return msg.channel.send("You don't have the necessary permissions")

        let user = msg.mentions.users.first()
        let reason = args.slice(2).join(" ");

        if(user){
            const member = msg.guild.member(user);

            if(member){
                member.kick({days: '', reason: (reason)}).then(() =>{
                    msg.reply(`Sucessfully kicked ${user.tag}`);
                }).catch(err =>{
                    msg.reply('I was unable to kick the member');
                    console.log(err);
                });
            } else{
                msg.reply("That user isn\'t in this quild")
            }
        } else {
            msg.reply("That user isn\'t in this quild")
        }
    }
}