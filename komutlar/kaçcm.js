const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Hemen Diyorum Abi 1 Saniye..').then(message => {
   var espriler = [' **Senin Malafatın  18CM ** :banana: ' ,'**Senin Malafatın  11CM ** :banana:' ,'**Senin Malafatın 32CM  ** :banana:' ,'**Senin Malafatın  35CM ** :banana:' ,'**Senin Malafatın  8CM  ** :banana:' ,'**Senin Malafatın  65CM  ** :banana:' ,'**Senin Malafatın 5CM  ** :banana:' ,'**Senin Malafatın 31CM  ** :banana:' ,'**Senin Malafatın  14CM ** :banana:' ,'**Senin Malafatın  1CM ** :banana:'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaçcm', 'cmkaç', 'kaç-cm', 'cm-kaç'],
  permLevel: 0
};

exports.help = {
  name: 'kaç-cm',
  description: 'Malafatını Söyler.',
  usage: 'kaçcm'
};