const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send("Заказать бота можно:");
    message.channel.send("https://vk.com/anonym.studio")
};
module.exports.help = {
    name: "заказать"
};