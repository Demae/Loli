module.exports = {
    name: 'info',
    description: "info",
    execute(msg, args){
        var version = '1.0.1'
        if(args[1] === 'version'){
            msg.channel.send('Version ' + (version))
        }else{
            msg.channel.send('Invalid Command')
        }
    }
}