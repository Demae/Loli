const { Message } = require("discord.js");

module.exports = {
    name: 'clear',
    description: "clear",
    execute(msg, args){
        if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You don't have the necessary permissions")
        if(!args[1]) return msg.reply('Please define a number')
        let numbe = args.slice(1).join(" ");
        if (msg.channel.type == 'text') {
            msg.channel.messages.fetch()
              .then(messages => {
                msg.channel.bulkDelete(numbe)
                .then (messages => msg.channel.send(`Deletion of messages successful. Total messages deleted: ${messages.size}`))
                .then(msg => {
                  msg.delete({ timeout: 2500 })
                })

              })
              .catch(err => {
                console.log('Error while doing Bulk Delete');
                console.log(err);
                bot.login(token);
              })
    }}
}
