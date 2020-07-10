module.exports = {
    name: 'lock',
    description: "lock",
    run: async (client, msg, args) => {
let channel = message.channel;
let roles = message.guild.roles; // collection
const adminRole = message.guild.roles.cache.find(r => r.name === '@everyone');

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