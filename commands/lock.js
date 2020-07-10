module.exports = {
    name: 'lock2',
    description: "lock2",
    run: async (client, msg, args) => {
        const type = msg.channel.type === 'text' ? 'SEND_MESSAGES' : 'CONNECT';
        await msg.channel.overwritePermissions(msg.channel.guild.defaultRole, { [type]: false });
        if (msg.channel.permissionsFor(msg.guild.me).has('SEND_MESSAGES') === false) return true;
        return msg.channel.send('This channel is under lockdown.');
    }}