const discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    var embed = new discord.RichEmbed()
    .setColor("#00FCFF")
    .setTitle(`Информация о создатели бота`)
    .addField(`Имя и Фамилия`, `**Эдуард Харин**`)
    .addField(`Тег в дискорде`, `**HypeSquad#4704**\n`)
    .addField(`ВКонтакте`, `**https://vk.com/xdesh**\n`)
    .addField(`YouTuBe`, `**https://www.youtube.com/channel/UCrH-hu032UV6NvWWsraoTAA?view_as=subscriber**\n`)
    .addField(`Для заказа бота обрашайтесь сюда:`, `**https://vk.com/xdesh**`)
    .addField(`Имя и Фамилия`, `**Женя Федоров**`)
    .addField(`Тег в дискорде`, `**Desert_Gamer#2254**`)
    .addField(`ВКонтакте`, `**Не известо**`)
    .addField(`YouTube`, `**Не известно**`)
    .addField(`Второстепенная информация`, `**Скоро на канале будет видео как он пишет комманду для меня**\n`)
    .setFooter(`Администрация бота Vlad mir!`, message.guild.iconURL);
    message.channel.send(embed);
};
module.exports.help = {
    name: "кодер"
};  