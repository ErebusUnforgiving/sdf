const Discord = require('discord.js')
const {PREFIX} = require('../config.json')
module.exports = {
  name: "yardım",
  description: "yardım",
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
  .setThumbnail(message.author.displayAvatarURL())                    
   .setAuthor(client.user.username, client.user.avatarURL)                    
                       .setDescription(
    `
<a:Zezesea18:801348291584327701> \`${PREFIX}play <şarkı-adı>\` : **Bir Şarkıyı Oynatır.**

<a:Zezesea18:801348291584327701> \`${PREFIX}skip\` : **Sıradaki Şarkıyı atlar.**

<a:Zezesea18:801348291584327701> \`${PREFIX}loop\` : **O Anki şarkıyı Hep tekrarlar.**

<a:Zezesea18:801348291584327701> \`${PREFIX}pause\` : **O anki Şarkıyı Durdurur.**

<a:Zezesea18:801348291584327701> \`${PREFIX}resume\` : **Duran Şarkıyı Devam Ettirir.**

<a:Zezesea18:801348291584327701> \`${PREFIX}queue\` : **O Anki Sırayı Gösterir.**

<a:Zezesea18:801348291584327701> \`${PREFIX}np\` : **O Anki Oynatılan Şarkıyı Söyler.**

<a:Zezesea18:801348291584327701> \`${PREFIX}lyrics\` : **O Anki Oynatılan Şarkı Sözlerini Söyler.**

<:developer:823428311136337941> \`Sahibim\` : <@805696566647324683>



`)
                      )    
}
}
