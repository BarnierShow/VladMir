const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("```У вас недостаточно прав для исполнения данной комманды.```");
    let rUser = bot.rUser;
    if(!args[0]) return bot.send("```Укажите правльный тег пользователя```");
    if(!rUser) return bot.send("```Пользователя нет на этом сервере!!```");
    if(!profile[rUser.id])return bot.send("```Пользователь отсутствует в моей базе данных```");
    if(profile[rUser.id]<=0) return bot.send("```У пользователя 0 предупреждений```");
    profile[rUser.id].warns--;
    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
    let embed = new Discord.RichEmbed()
    .setDescription("Предупреждение")
    .setColor('#25ca85')
    .addField("Администратор",message.author.username)
    .addField("Снял предупреждение",`${rUser.user.username}`)
    .addField("Количество предупрежденией",`${profile[rUser.id].warns}/3`);

    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "unwarn"
};