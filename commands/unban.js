module.exports = {
    name: 'unban',
    description: "unban",
    run: async (bot, msg, args) => { 

    if(!msg.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return msg.channel.send("You can't do that.")

    if(!args[0]) return msg.channel.send("Give me a valid ID"); 
    //This if() checks if we typed anything after "!unban"

    let bannedMember;
    //This try...catch solves the problem with the await
    try{                                                           
       
        bannedMember = await bot.users.fetch(args[1])
    }catch(e){
        if(!bannedMember) return msg.channel.send("That's not a valid ID")
    }

    //Check if the user is not banned
    try {
            await msg.guild.fetchBan(args[1])
        } catch(e){
            msg.channel.send('This user is not banned.');
            return;
        }

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "..."

    if(!msg.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return msg.channel.send("I can't do that")
    try {
        msg.guild.members.unban(bannedMember, {reason: reason})
        msg.channel.send(`${bannedMember.tag} was readmitted.`)
    } catch(e) {
        console.log(e.message)
    }
}}