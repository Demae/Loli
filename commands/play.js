const ytdl = require('ytdl-core')

module.exports = {
    name: 'play',
    description: "play",
    run: async (client, msg, args) => {
        if (!msg.member.voice.channel) return msg.channel.send('Please connect to a voice channel.');
        if (msg.guild.me.voiceChannel) return msg.channel.send('Sorry, the bot is already connect to the guild.');
        if (!args[1]) return msg.channel.send('Sorry, please input a url following the command.');
        let validate = await ytdl.validateURL(args[1]);
        if (!validate) return msg.channel.send('Sorry, please input a **valid** url following the command.');
        let info = await ytdl.getInfo(args[1]);
        let connection = await msg.member.voice.channel.join();
        let dispatcher = await connection.playStream(stream)
        msg.channel.send(`Now playing: ${info.title}`)
    }}