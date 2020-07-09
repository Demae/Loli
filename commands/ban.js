module.exports = {
    name: 'ban',
    description: "ban",
    execute(msg, args){
        if(!msg.member.roles.cache.find(r => r.name === "Moderator")) return msg.channel.send("You don't have the necessary permissions")

        let user2 = msg.mentions.users.first();
        let reason2 = args.slice(2).join(" ");
        let iduser = msg.mentions.users.first().id;

        if(user2){
            const member = msg.guild.member(user2);

            if(member){
                member.ban({days: '', reason: (reason2)}).then(() =>{
                    msg.reply(`Sucessfully unbanned ${user2.tag} with ID: ${iduser}`);
                }).catch(err =>{
                    msg.reply('I was unable to ban the member');
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