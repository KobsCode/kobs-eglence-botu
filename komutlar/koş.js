const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const kobscode = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Koş Lan Koş Zayıflarsın.')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://media.giphy.com/media/Sux3kje9eOx1e/giphy.gif`)
    return message.channel.sendEmbed(kobscode);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'koş',
  description: 'Koşarsınız.',
  usage: 'koş'
};
