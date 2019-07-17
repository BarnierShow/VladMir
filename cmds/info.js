const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    var BotIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
      .setDescription("Информация о боте")
      .setColor("#4b0082")
      .setThumbnail(BotIcon)
      .addField("Имя бота", bot.user.username)
      .setFooter(`Коммнда по безопастности Discord сервера!`, message.guild.iconURL);
    return message.channel.send(botEmbed);
}

module.exports.help ={
    name: "info"
}