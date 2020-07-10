const { Message } = require("discord.js")

module.exports = {
    name: 'leave',
    description: "leave",
    run: async (client, msg, args) => {
        if(!msg.member.voice.channel) return msg.channel.send('Please connect to a voice channel.');
        if(!msg.guild.me.voice.channel) return msg.channel.send('Sorry, the bot isn\'t connected to the guild');
        if (msg.guild.me.voice.channel.id !== msg.member.voice.channel.id) return msg.channel.send('Sorry, you aren\'t connected to the same channel.');
        msg.guild.me.voice.channel.leave();
        msg.channel.send('Leaving Channel...')
    }}