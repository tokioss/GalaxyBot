const config = require('./../config.json');
exports.run = (client, message, args, sql) =>{
    if (message.author.id == config.ownerID){
      client.user.setActivity(args.join(" "));
    }else{
      message.channel.send(`Sorry you don't have access to this command.`);
    }

}
