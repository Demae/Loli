module.exports = {
    name: 'version',
    description: "version",
    execute(msg, args){
        var version = '1.0.1'
        msg.channel.send('Version ' + (version))
        }
    }