module.exports = {
    name: 'lock',
    description: "lock",
    execute(msg, args){

    let channel = msg.channel;
    let roles = msg.guild.roles.cache; // collection

    // find specific role - enter name of a role you create here
    let testrole = msg.guild.roles.cache.find(r => r.name === '@everyone');

    // overwrites 'SEND_MESSAGES' role, only on this specific channel
    channel.overwritePermissions(
        testrole,
        { 'SEND_MESSAGES': false },
        // optional 'reason' for permission overwrite
        'closing up shop'
    )
    // handle responses / errors
    .then(console.log)
    .catch(console.log);
}}