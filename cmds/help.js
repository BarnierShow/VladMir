const discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    var embed = new discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setColor("#00FCFF")
    .setTitle(`Информация о коммандах`)
    .addField(`Модерационные комманды`, `**he!ban**\n**he!kick**\n**he!warn**\n**he!unwarn**\n**he!unban**\n**he!mute**\n**he!unmute**`)
    .addField(`Развлекательные комманды`, `**he!say**\n**he!ping**\n**he!serverinfo**\n**he!userinfo**\n**he!кодер**\n**he!заказать**`)
    .setFooter(`Комманда по безопастности Discord Сервера!`, message.guild.iconURL);
    message.channel.send(embed);
};
module.exports.help = {
    name: "help"
};