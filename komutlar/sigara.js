  const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

exports.run = (client, message, args) => {
  return message.channel
    .send("**Yak,yak,yak yarasın goçuma**")
    .then(async msg => {
      setTimeout(() => {
        msg.edit("🚬");
      }, 500);
      setTimeout(() => {
        msg.edit("🚬 ☁ ");
      }, 700);
      setTimeout(() => {
        msg.edit("🚬 ☁☁ ");
      }, 900);
      setTimeout(() => {
        msg.edit("🚬 ☁☁☁ ");
      }, 1000);
      setTimeout(() => {
        msg.edit("🚬 ☁☁☁");
      }, 1100);
      setTimeout(() => {
        msg.edit("🚬 ☁☁");
      }, 1200);
      setTimeout(() => {
        msg.edit("🚬 ☁");
      }, 1300);
      setTimeout(() => {
        msg.delete(`**Sigara bitti.**`);
      }, 6000);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sigara-yak"],
  permLevel: "0"
};

exports.help = {
  name: "sigarayak",
  description: "sigara içersiniz",
  usage: "sigara"
};
