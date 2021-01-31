const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) return message.author.send('Bu komutu özel mesajlarda kullanamazsın.'); 
  let kullanici = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.channel.send('Dürtmek için bir kullanıcıyı etiketlemelisin.').catch(console.error);
  if(kullanici.bot) return message.channel.send(`Botları dürtemezsin, onlar dürtmen için çok sert.`)
  if(kullanici === message.author) return message.channel.send(`Kendini dürtemezsin, bu hiç mantıklı değil.`)
  message.channel.send('Kişiyi başarıyla dürttünüz, spam haricinde aranızda olabilecek sövüşlerden biz sorumlu değiliz.')
  const embed = new Discord.RichEmbed()
  .setColor('GREEN')
  .setAuthor(`Dürtüldün!`, kullanici.avatarURL)
  .setDescription(`Hey <@${kullanici.id}>, <@${message.author.id}> adlı kullanıcı sizi dürttü.`)
  .setFooter('- Dürtme', client.user.avatarURL)
  .setThumbnail(message.author.avatarURL)
  return kullanici.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['durt'],
  permlevel: 0
};

exports.help = {
  name: 'dürt',
  description: 'Etiketlediğiniz kullanıcıyı dürtersiniz.',
  usage: 'dürt @Kullanıcı'
};