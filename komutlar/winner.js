const Discord = require("discord.js");

exports.run = (client, message, args) => {
 if (!message.guild) {
  return }  
var Jimp = require("jimp");
  const Discord = require("discord.js");
  let img = Jimp.read(
      message.mentions.users.first()
        ? message.mentions.users.first().avatarURL
        : message.author.avatarURL
    ),
    moldura = Jimp.read(
      "https://cdn.discordapp.com/attachments/484692865985806346/487841969561796608/image0.png"
    );
  Promise.all([img, moldura]).then(imgs => {
    let moldura = imgs[1],
      img = imgs[0];
    moldura.resize(720, 620);
    img.resize(720, 615);
    img.composite(moldura, 0, 0).getBuffer(Jimp.MIME_PNG, (err, kobscode) => {
      if (!err) message.channel.send(new Discord.Attachment(kobscode));
    });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "win",
  description: "atam",
  usage: "winner"
};