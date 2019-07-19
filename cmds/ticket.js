const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    message.delete(5000);
    const categoryID = "600912145563254834";
    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;
    var bool = false;
    var userDiscriminator = message.author.discriminator;
    let moderator = message.guild.roles.find(r => r.name == "Тех.Поддержка");//Проверка на роль
    if (!moderator){
        message.reply(`\`не найдена роль модератора! некому обрабатывать жалобы!\``);//Роль не найдена, создаём ;)
        return message.delete();
    }
    var reason = args.join(" ").slice(0);
    if(!reason) return message.reply("`Правильное использование команды: /ticket [текст]`").then(msg => msg.delete(5000));//Текст если мало аргументов
    message.guild.channels.forEach((channel) => {
        if(channel.name == userName.toLowerCase() + "-" + userDiscriminator){
            message.reply("`У вас уже имеется обращение, ожидайте его закрытия!`").then(msg => msg.delete(5000));//Проверка на уже имеющиеся обращения
            bool = true;

        }
    });

    if(bool == true) return;
    var embedcreateTicket = new discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setColor("#8B0000")
    .addField(`**Новое обращение**`, `\n**Ваше обращение было успешно создано!**`)
    .setFooter(`Команда по безопасности Discord сервера.`,  message.guild.iconURL)
    .setTimestamp();
    message.author.send(embedcreateTicket);
    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => {
    createdChan.setParent(categoryID).then((settedParent) => {
    settedParent.overwritePermissions(message.guild.roles.find(role => role.name === "@everyone"), {"READ_MESSAGES": false});
    settedParent.overwritePermissions(moderator, {//Выдаём доступ к категории
        "READ_MESSAGES": true, "SEND_MESSAGES": true,//Выдаём доступ к категории
        "ATTACH_FILES": true, "CONNECT": true,//Выдаём доступ к категории
        "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true//Выдаём доступ к категории
    });
    settedParent.overwritePermissions(message.author, {//Выдаём доступ создателю к категории
        "READ_MESSAGES": true, "SEND_MESSAGES": true,//Выдаём доступ создателю к категории
        "ATTACH_FILES": true, "CONNECT": true,//Выдаём доступ создателю к категории
        "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true//Выдаём доступ создателю к категории
    });
    settedParent.send(`<@${message.author.id}> \`для команды поддержки\` <@&600579093909602305>`);
    var embedCreateTickets = new discord.RichEmbed()
    .setTitle("Обращение к поддержке Discord")
    .setColor("#00CED1")
    .addField(`Отправитель`, `**Пользователь:** \`${message.member.displayName || message.member.user.tag}\``)
    .addField(`Суть обращения`, `${reason}`)
    .setFooter(`Команда по безопасности Discord сервера.`,  message.guild.iconURL)
    .setTimestamp();
    settedParent.send(embedCreateTickets);//Отправляем сообщение выше

    }).catch(err => {
        message.channel.send("`Ошибка при создании обращения!`")//Выводим ошибку

        });
    })
}

module.exports.help ={
    name: "ticket"
}  