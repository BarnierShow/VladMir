const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send("Бот запущен, желаю тебе хорошего настроения)");
};
module.exports.help = {
    name: "ping"
};