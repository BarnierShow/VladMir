const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("```У вас недостаточно прав для исполнения данной комманды```");
    let botmessage = args.join(" ");
    message.delete().catch();
    bot.send(botmessage);
};
module.exports.help = {
    name: "say" 
};