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
    .setAuthor('Wuhuuuu! Güzel Yumruktu!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://images-ext-1.discordapp.net/external/PuwTSVuQ_p-dYCI_XAfYgzxvOaNiGsOq3cdYxORu4J4/http/exorcist-soft.ucoz.ru/images/BAN.gif`)
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
  name: 'yumruh-at',
  description: 'Yumruk Atar.',
  usage: 'yumruh-at'
};
