module.exports = {
    name: 'lock',
    description: "lock",
    run: async (client, msg, args) => {
        const type = channel.type === 'text' ? 'SEND_MESSAGES' : 'CONNECT';
        await channel.overwritePermissions(channel.guild.defaultRole, { [type]: false });
        if (msg.channel.permissionsFor(msg.guild.me).has('SEND_MESSAGES') === false) return true;
        return msg.send('This channel is under lockdown.');
    }}