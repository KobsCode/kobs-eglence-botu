const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const kobs= new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`Kobs`, client.user.avatarURL) 
      .setDescription('**[Youtube](https://youtube.com/KobsCode)**')
      .addField('** !eğlencekomutları (20)**', '`155`, `8ball`, `sor`, `adamasmaca`, `alkış`, `avatar`, `atasozu`, `ateşle`, `aşk`, `balıktut`, `banner`, `botping`, `bulanık`, `casper`, `dalgageç`, `dans`, `deyim`, `dürt`, `efkar-vs`, `emojiyazı`')
      .addField('** !eğlencekomutları (20)**', '`event`, `fal`, `filmara`, `havadurumu`, `herkezeçay`, `iftar`, `ilginçbilgi`, `kafasalla`, `kapaklaflar`, `kasaaç`, `kaçcm`, `kimlikoluştur`, `vine`, `korona`, `koronaol`, `koş`, `kralol`, `kullanıcı-bilgi`, `lolbilgi`, `maymunol`')
      .addField('** !eğlencekomutları (20)**', '`mcbaşarım`, `missionpassed`, `oylama`, `piyango`, `saat`, `sigarayak  `, `slot`, `soygun`, `speedtest`, `steamfiyat`, `stresçarkı`, `tavsiye`, `tekerleme`, `tkm`, `twitter`, `tr`, `wasted`, `win`, `gif`, `yapımcım`')
      .addField('** !eğlencekomutları (8)**', '`yazı-tura`, `yumruh-at`, `zamanlayıcı`, `zarat`, `çayaşekerat`, `çayiç`, `çekiç`, `şanslısayım`')
      .addField(`**Linkler** ->`, `[**Discord**](https://discord.gg/axjXvA9cCa)`)
    .setFooter(``, client.user.avatarURL)
    .setTimestaamp()
    message.channel.send(kobs).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bilgi'],
    permLevel: 0
};

exports.help = {
    name: 'bilgi',
      category: 'Yardım Menüsü',
      description: 'bilgi',
};