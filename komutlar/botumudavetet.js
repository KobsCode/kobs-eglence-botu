const Discord = require ('discord.js');
const db = require ('quick.db')

exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
 .setColor("BLUE")
 .setDescription('[**Botu Ekle**](botdavetlinki) | [**Discord Destek Sunucusu**](https://discord.gg/axjXvA9cCa)')
 .setTimestamp()
    message.channel.send(embed)
   
 };
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ["invitation"],
   permLevel: 0
 };
 exports.help = {
   name: 'davet',
   description: 'Botun davet bağlantılarını gösterir',
   usage: 'davet'
 };