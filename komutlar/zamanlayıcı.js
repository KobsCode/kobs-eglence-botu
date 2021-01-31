const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, params, perms) {
  if (message.author.id != ayarlar.sahip) {
  message.reply('Komut test aşamasındadır! Sadece bot sahipleri kullanabilir!'
                )}
  else {
    if (params.length < 0) {message.channel.send('Doğru kullanım : \n *zamanlayıcı saat:dakika:saniye │ *zamanlayıcı 00:15:00 gibi...');return}
    try {
        var zaman = params[0].split(':');
    } catch (ex) {
        message.channel.send(`Lütfen zamanlayıcıyı hangi zamana ayarliyacağını belirt. \`-00:15:00\``);return
    }
    var zaman = params[0].split(':');
    if (isNaN(parseInt(zaman[0]))) {message.channel.send('Doğru kullanım : \n *zamanlayıcı saat:dakika:saniye │ *zamanlayıcı 00:15:00 gibi...');return}
    if (isNaN(parseInt(zaman[1])) || !(parseInt(zaman[1]) < 60) || !(parseInt(zaman[1]) >= 0)) {message.channel.send('Doğru kullanım : \n *zamanlayıcı saat:dakika:saniye │ ;zamanlayıcı 00:15:00 gibi...');return}
    if (isNaN(parseInt(zaman[2])) || !(parseInt(zaman[2]) < 60) || !(parseInt(zaman[2]) >= 0)) {message.channel.send('Doğru kullanım : \n *zamanlayıcı saat:dakika:saniye │ ;zamanlayıcı 00:15:00 gibi...s');return}
    var schTime = Date.now() + (parseInt(zaman[0])*3600000) + (parseInt(zaman[1])*60000) + (parseInt(zaman[2])*1000);
    
    message.channel.send(`${params[0]} Kaldı!`).then(msg=>{
        var interval = setInterval(()=> {
            console.log(schTime - Date.now() + 1)
            if (schTime - Date.now() + 1 < 0){
                msg.edit('Süre Doldu!').catch(console.error);
                clearInterval(interval)
            } else {
                let seconds = (Math.floor((schTime - Date.now())/1000) + 1) % 60;
                let normalSeconds = (Math.floor((schTime - Date.now())/1000) + 1);
                let min =  Math.floor(Math.floor(normalSeconds / 60) % 60)
                if (min === 60) min = 0;
                let hour = Math.floor((Math.floor((schTime - Date.now())/1000) + 1) / 3600);
                msg.edit(`${hour}:${min}:${seconds} Kaldı!`).catch(console.error)
                if (schTime - Date.now() + 1 < 5000) {
                    clearInterval(interval)
                    setTimeout(()=>{
                        msg.edit('Süre Doldu!').catch(console.error);
                    },Math.floor(schTime - Date.now() + 1))
                }
            }
        },5000)
    }).catch(console.error)
  }};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};
exports.help = {
  name: 'zamanlayıcı',
  description: 'Zamanlayıcı',
  usage: 'SS'
};
   