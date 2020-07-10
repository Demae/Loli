module.exports = {
    name: 'lock',
    description: "lock",
    run: async (client, msg, args) => {
    let channel = msg.channel;
    let roles = msg.guild.roles; // collection
    const adminRole = msg.guild.roles.cache.find(r => r.name === '@everyone');

    // overwrites 'SEND_MESSAGES' role, only on this specific channel
    channel.overwritePermissions(
        adminRole,
        { 'SEND_MESSAGES': false },
        // optional 'reason' for permission overwrite
        'lockdown'
    )
        // handle responses / errors
        .then(console.log)
        .catch(console.log);
    }
};