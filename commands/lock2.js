module.exports = {
    name: 'lock',
    description: "lock",
    run: async (client, msg, args) => {
    let channel = msg.channel;
    let roles = msg.guild.roles; // collection
    const adminRole = msg.guild.roles.cache.find(r => r.name === '@everyone');

    // overwrites 'SEND_MESSAGES' role, only on this specific channel
    channel.overwritePermissions([
        {
           id: adminRole.id,
           deny: ['SEND_MESSAGES'],
        },
      ], 'Lockdown')

        // handle responses / errors
        .then(console.log)
        .catch(console.log);
    }
};