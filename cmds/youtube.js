const discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    var embed = new discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setColor("#FF0000")
    .setTitle(`YouTube`)
    .addField(`YouTube Reut_S1`, `**https://www.youtube.com/channel/UCGNGGBx8U9DVxNG59bkSeEg**\n`)
    .setFooter(`Команда по безопастности Discord Сервера!`, message.guild.iconURL);
    message.channel.send(embed);
};
module.exports.help = {
    name: "help"
};