const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  const ara155 = new Discord.RichEmbed()
  
   .setAuthor('Polis Geliyor Kaç')
  .setImage('https://images-ext-2.discordapp.net/external/ALXGyy_LjtcnHtGEH0DSvXPko6Qi0yp5CbkdFQomSTg/http/www.hareketligifler.net/data/media/114/polis-hareketli-resim-0023.gif')
  message.channel.send(ara155)
}
//////////////////////OgünSertKobsPaylaşmakYasaktır////////////////////
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
  };
  exports.help = {
    name: "155",
    description: "155 Çağırırsınız",
    usage: "155"
  };