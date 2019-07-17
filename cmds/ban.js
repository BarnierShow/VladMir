const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("```У вас недостаточно прав для исполнения данной комманды```");
    let rUser = bot.rUser;
    if(!args[0]) return bot.send("```Укажите правильный тег пользователя```");
    if(!rUser) return bot.send("```Данного пользователя не существует. Увы не судьба :(```");
    let embed = new Discord.RichEmbed()
    .setDescription("Бан")
    .setColor('#e22216')
    .addField("Администратор",message.author.username)
    .addField("Забанил",`${rUser.user.username}`);
    
    message.guild.member(rUser).ban("Бан");
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "ban"
};