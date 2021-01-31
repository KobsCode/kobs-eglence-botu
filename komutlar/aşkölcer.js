exports.run = async (client, msg, args) => {
    let askölç=[,
      "Aşkölçer %0 Gösteriyor.",
      "Aşkölçer %3 Gösteriyor.",
      "Aşkölçer %9 Gösteriyor.",
      "Aşkölçer %10 Gösteriyor.",
      "Aşkölçer %12 Gösteriyor.",
      "Aşkölçer %18 Gösteriyor.",
      "Aşkölçer %20 Gösteriyor.",
      "Aşkölçer %20 Gösteriyor.",
      "Aşkölçer %26 Gösteriyor.",
      "Aşkölçer %29 Gösteriyor.",
      "Aşkölçer %30 Gösteriyor.",
      "Aşkölçer %40 Gösteriyor.",
      "Aşkölçer %57 Gösteriyor.",
      "Aşkölçer %1 Gösteriyor.",
      "Aşkölçer %72 Gösteriyor.",
      "Aşkölçer %75 Gösteriyor.",
      "Aşkölçer %65 Gösteriyor.",
      "Aşkölçer %43 Gösteriyor.",
      "Aşkölçer %98 Gösteriyor.",
      "Aşkölçer %33 Gösteriyor.",
      "Aşkölçer %45 Gösteriyor.",
      "Aşkölçer %76 Gösteriyor.",
      "Aşkölçer %71 Gösteriyor.",
      "Aşkölçer %92 Gösteriyor.",
      "Aşkölçer %93 Gösteriyor.",
      "Aşkölçer %94 Gösteriyor.",
      "Aşkölçer %95 Gösteriyor.",
      "Aşkölçer %96 Gösteriyor.",
      "Aşkölçer %97 Gösteriyor.",
      "Aşkölçer %98 Gösteriyor.",
      "SEN ÇOK ASIKSIN KnK",
      "Aşkölçer %100 Gösteriyor.",
    ]
      let üye = msg.mentions.members.first()
     if(!üye)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: ('Birini Ekitle')
  }});
 
 
 
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${üye} ${askölç[Math.floor(Math.random() * 30)]}.`)
    }})
    }
 
 
  }
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['AŞKÖLÇER','AşkÖlçer','AşkÖlç','Aşk','aşk'],
    permLevel: 0
   };
 
  exports.help = {
    name: 'aşk-ölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşk-ölçer',
  }