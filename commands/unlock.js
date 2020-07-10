module.exports = {
    name: 'unlock',
    description: "unlock",
    run: async (client, msg, args) => {
    let channel = msg.channel;
    let roles = msg.guild.roles; // collection
    const adminRole = msg.guild.roles.everyone.id;

    // overwrites 'SEND_MESSAGES' role, only on this specific channel
    channel.overwritePermissions([
        {
           id: adminRole,
           allow: ['SEND_MESSAGES'],
        },
      ], 'Lockdown')
      msg.guild.channels.get('channelID').toString();
      msg.channel.send(':unlock: <#channelID> has been unlocked.')

        // handle responses / errors
        .catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);
    })
}};