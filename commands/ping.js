const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: "says ping!",
    run: async (client, message, args) => {
        const apiPing = Math.round(message.client.ws.ping); // This will round the api ping of the client
        const responseTime = Math.round(Date.now() - message.createdTimestamp); // This will round the response time between when the message was received and when the message was sent

        const embed = new MessageEmbed()
        .setColor(0xFF0000)
        .setTitle(':ping_pong: Pong!')
        .setDescription(`Bot Latency is **${responseTime}ms** \nAPI Latency is **${apiPing}ms**`)

        message.channel.send(embed);
    }
}