const Discord = require("discord.js");

exports.run = (client, message) => {

let motion = new Discord.MessageEmbed()
  
    .setThumbnail(message.author.displayAvatarURL())
    .setAuthor(client.user.username, client.user.avatarURL)
    .addField(
      "Veriler", 
      `> Total Server: **${
        client.guilds.cache.size
      }** \n> Total Members: **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}** \n> Total channel: **${
        client.channels.cache.size
      }**`
    ) 
    .addField(
      "Bot Developers",
      `> Bot Developers ➡ <@805696566647324683> `
    ) 
    .addField(
      "Sürümler",
      `> Discord.js version: **v${Discord.version}** \n> Node.js version: **${process.version}**`
    ) 
    .addField(
      "PING",
      `> Bot ping: **${
        client.ws.ping
      }** \n> Message delay: **${new Date().getTime() -
        message.createdTimestamp}**`
    )
    
    .setTimestamp()
    .setColor("#ff0000");
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["status","i"]
};

exports.help = {
  name: "istatistik",
  description: "İstatistik",
  usage: "i"
};