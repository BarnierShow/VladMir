const discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    var embed = new discord.RichEmbed()
    .setColor("#00FCFF")
    .setTitle(`Информация о создатели бота`)
    .addField(`Имя и Фамилия`, `**Неизвестно**`)
    .addField(`Тег в дискорде`, `**lolka#4774**\n`)
    .addField(`ВКонтакте`, `**Неизвестно**\n`)
    .setTitle(`Дополнительная информация`)
    .addField(`Заказать бота можно здесь:`, `**https://vk.com/anonym.studio**\n`)
    .setFooter(`Администрация Hack.exe!`, message.guild.iconURL);
    message.channel.send(embed);
};
module.exports.help = {
    name: "кодер"
};  
