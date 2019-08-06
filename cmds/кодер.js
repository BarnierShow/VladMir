const discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    var embed = new discord.RichEmbed()
    .setColor("#00FCFF")
    .setTitle(`Информация о создатели бота`)
    .addField(`Имя и Фамилия`, `**Неизвестно**`)
    .addField(`Тег в дискорде`, `**Anonym#4704**\n`)
    .addField(`ВКонтакте`, `**Неизвестно**\n`)
    .setFooter(`Администрация Hack.exe!`, message.guild.iconURL);
    message.channel.send(embed);
};
module.exports.help = {
    name: "кодер"
};  