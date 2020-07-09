module.exports = {
    name: 'slowmode',
    description: "slowmode",
    execute(msg, args){
        if(!msg.member.roles.cache.find(r => r.name === "Moderator")) return msg.channel.send("You don't have the necessary permissions")
        if(!args[1])return msg.channel.send('Current Slowmode is ' + msg.channel.rateLimitPerUser + ' seconds')
        let mode = args.slice(1).join(" ");
        msg.channel.setRateLimitPerUser(mode)
        msg.channel.send('Slowmode set to ' + mode + ' seconds')
    }
}