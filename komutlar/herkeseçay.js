const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  const çaylar = new Discord.RichEmbed()
  
   .setAuthor('Çaylar')
  .setImage('https://images-ext-1.discordapp.net/external/fYGOUmfHGYHt6XUz0m5CXl6LOuIDWmBmvkygOYm5EgI/https/images-ext-2.discordapp.net/external/Cch33UkRxcy5CstqP5Cvt6q52z6QPsT9tNNHeWXPmUM/http/i.hizliresim.com/PMQ7od.gif')
  message.channel.send(çaylar)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
  };
  exports.help = {
    name: "herkezeçay",
    description: "Herkeze Çay Ismarlarsın��z",
    usage: "herkezeçay"
  };