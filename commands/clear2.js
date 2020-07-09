module.exports = {
    name: 'clearall',
    description: "clearall",
    execute(msg, args){
        if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You don't have the necessary permissions")
        if (msg.channel.type == 'text') {
            msg.channel.messages.fetch()
              .then(messages => {
                msg.channel.bulkDelete(messages)
                .then (messages => msg.channel.send(`Deletion of messages successful. Total messages deleted: ${messages.size}`))
                .then(msg => {
                  msg.delete({ timeout: 2500 })
                })
          })
          .catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);
          })
    }}}
