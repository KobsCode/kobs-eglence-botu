const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const kobscode = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Korona Oldun Bana Yaklaşma')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
    .setURL('https://discord.gg/NP7Ar2j')
        .setImage(`https://media.giphy.com/media/fSjhFvhSLzuo19F5hf/giphy.gif`)
    return message.channel.send(kobscode);
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'koronaol',
  description: 'Korona Olursun',
  usage: 'korona'
};