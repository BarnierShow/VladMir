const discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    var embed = new discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setColor("#00FCFF")
    .setTitle(`Информация о коммандах`)
    .addField(`Модерационные комманды`, `**vm!ban**\n**vm!kick**\n**vm!warn**\n**vm!unwarn**\n**vm!unban**\n**vm!mute**\n**vm!unmute**`)
    .addField(`Развлекательные комманды`, `**vm!say**\n**vm!ping**\n**vm!serverinfo**\n**vm!userinfo**\n**vm!devolver**\n**vm!кодер**\n`)
    .setFooter(`Комманда по безопастности Discord Сервера!`, message.guild.iconURL);
    message.channel.send(embed);
};
module.exports.help = {
    name: "help"
};