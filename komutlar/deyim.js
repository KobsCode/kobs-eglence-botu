const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var Random = [
'**Olur olmaz kimseler, ne olduğu belirsiz kişiler.**',
'**Birine yük olmak, onun sırtından geçinmek.**',
'**Düşüncesizce hareket etmek.**',
'**Bir kimseye, istediği gibi davranma yetkisi vermek.**',
'**Düzelmek, göze hoş görünmek.**',
'**Özür dilemeyi ifade eden bir deyim.**',
'**Önüne konulan her yemeği çabuk yemek.**',
'**Sır tutmak hali.**',
'**Daima feryat etmek.**',
'**Çok yaşlanmak.**',
'**Sanırım çok şanssızsın :) Trole uğradın, Bu çok düşük oranla geliyor... Deyim istiyorsan komutu bidaha yaz. :) Tabi bidaha bu gelmesse. :joy: **',
'**Bir işte bütün yükü, sorumluluğu yetersiz kişiye bırakma durumunda söylenir..**',
'**Doğruyu söylemesi istenen kimseye verilen söz.**',
'**Olmayacak bir şey söyledin anlamında.**',
'**Sonunda işini kolaylaştırmak.**',
'**Gerçek değerinden fazlaya mal olmak.**',
'**Hafif ve işveli davranmak.**',
'**Hepsi aynı hesaba geliyor anlamında..**',
'**Çok korkulu ve zorba olmak.**',
'**Saygı duyulmayan, hayırsız baba.**',
'**Bir felakete uğramak.**',
'**Kavga sebebi yaratmak.**',
'**Herkesin garip bir tutum içinde bulunduğunu anlatmak için kullanılır.**',
'**Düşünceli kimseleri avutmak için teselli mahiyetinde söylenir.**',
'**İlgisiz davranmak, ilgiyi kesmek.**',
'**Biri tarafından ağzının payı verilmek.**',
'**Karışıklıktan yararlanıp menfaatini kollamak.**',
'**Her şeyi önceden sezmek.**',
'**Bir işte çok eziyet ve sıkıntı çekmek.**',
'**Herkes tarafından bilinmek.**',
'**Ani olarak girmek, dalmak.**',
'**Çok zeki, açıkgöz.**',
'**Sözünü çeviren kimseler için söylenir.**',
'**Durumuna uygun düşmeyen büyük ve olmayacak hayallere kapılmak.**',
'**Sır saklamayan, önüne gelene içini döken.**',
'**Kıyaslanan şeyler arasındaki orantısızlığı belli etmek için kullanılır.**',


];
var atasozuver = Math.floor(Math.random()*Random.length);
const atasozu= new Discord.RichEmbed()
.setDescription(`${Random[atasozuver]}`)
.setColor(0xe2ff00)
.setTimestamp()
message.channel.send(atasozu)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'deyim',
description: 'Bot Tarafından Rasgele Deyim Gönderilir. ',
usage: 'deyim'
};