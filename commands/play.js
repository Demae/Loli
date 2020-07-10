const ytdl = require('ytdl-core')

module.exports = {
    name: 'play',
    description: "play",
    run: async (client, msg, args, ops) => {
        if (!msg.member.voiceChannel) return msg.channel.send('Please connect to a voice channel.');
        if (msg.guild.me.voiceChannel) return msg.channel.send('Sorry, the bot is already connect to the guild.');
        if (!args[0]) return msg.channel.send('Sorry, please input a url following the command.');
        let validate = await ytdl.validateURL(args[0]);
        if (!validate) return msg.channel.send('Sorry, please input a **valid** url following the command.');
        let info = await ytdl.getInfo(args[0]);
        let connection = await msg.member.voiceChannel.join();
        let dispatcher = await connection.play(ytdl(args[0], { filter: 'audioonly' }));
        msg.channel.send(`Now playing: ${info.title}`)
    }}