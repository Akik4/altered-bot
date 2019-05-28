const Discord = require("discord.js");
const Client = new Discord.Client();
const moment = require('moment');
const config = {
    "token" : 
    "NTgwNDgzNzEzMTMwMDM3MjQ5.XOlLKw.3Y8qpN2ewvpstnzjDrpnhOGePGk",
    "FirstId" : "580483713130037249",
    "SecondID": "423929310408343563"
}
const prefix = {
    "basique" : "a!",
    "help" : "a!help "
}
const pconfig = require("./config.json");
const fs = require("fs")


Client.on("ready", async () =>{

    console.log("prêt")


  //  Client.user.setActivity(`${pconfig.activity.game}`, {url : "https://twitch.tv/akik4"})
  //  console.log("jeu : " + pconfig.activity.game)

/*    setInterval(function(){
        console.logs("ah")
    }, 5000)*/

})


Client.on("message", message => {




       
if(message.author.id === config.FirstId){
    if(message.author.id === SecondID){

    if(message.content.startsWith(prefix.basique + "game")){

        let args = message.content.split(' ').slice(1);

        Client.pers = {

                game: args.join(' ')
      
            }

            fs.writeFile('./config.json', JSON.stringify(Client.pers, null, 4), err =>{
                if(err) throw err;
                message.reply("Jeu défini en " + args.join(' '))
            })
            Client.user.setActivity(Client.pers.game, {url: "https://twitch.tv/akik4"})


}

        if(message.content.startsWith(prefix.basique + "help")){
            console.log("commentcha")
            let help = new Discord.RichEmbed()
            .setTitle(`🔰 𝘼 𝙎𝙚𝙡𝙛𝘽𝙤𝙩`)
            .setColor('ffffff')
            .setDescription('\n')
            .setImage("https://media.giphy.com/media/YzGDUUwgFzHfW/giphy.gif")
            .addField("》📌 𝕀𝕟𝕗𝕠", "```『a!info』```", true)
            .addField("》🎉 𝔸𝕦𝕥𝕣𝕖𝕤", "```『a!other』```", true)
            .addField("》🔨 𝕆𝕦𝕥𝕚𝕝𝕤", "```『a!tools』```")
            message.channel.send(help)
            }
            if(message.content.startsWith(prefix.basique + "info")){
                let info = new Discord.RichEmbed()
                .setTitle(`🔰 𝘼 𝙎𝙚𝙡𝙛𝘽𝙤𝙩`)
                .setColor('ffffff')
                .setImage("https://media.giphy.com/media/YzGDUUwgFzHfW/giphy.gif")
                .addField("`a!stats <@user>`", "Voir vos stats ou les stats d'un joueur.", false)
                
     
                message.channel.send(info)
            }
            if(message.content.startsWith(prefix.basique + "other")){
                let other = new Discord.RichEmbed()
                .setTitle(`🔰 𝘼 𝙎𝙚𝙡𝙛𝘽𝙤𝙩`)
                .setColor('ffffff')
                .setImage("https://media.giphy.com/media/YzGDUUwgFzHfW/giphy.gif")
                .addField("》🤗 Calin", "```『a!hug <@user> <text>』```", true)
                .addField("》💋 Bisou", "```『a!kiss <@user> <text>』```", true)
                message.channel.send(other)
            }

            if(message.content.startsWith(prefix.basique + "tools")){
                let tools = new Discord.RichEmbed()
                .setTitle(`🔰 𝘼 𝙎𝙚𝙡𝙛𝘽𝙤𝙩`)
                .setColor('ffffff')
                .setImage("https://media.giphy.com/media/YzGDUUwgFzHfW/giphy.gif")
                .addField("》🎮 Change de jeu", "```『a!jeu <text>』```", true)
                .addField('》📄 Broadcast embed', "```『a!say <text>』```", true)

                message.channel.send(tools)
            }


            if(message.content.startsWith(prefix.basique + "hug")){
                let member = message.mentions.users.first();
                let heremember = member;
                let hug = [
                    "https://media.giphy.com/media/kvKFM3UWg2P04/giphy.gif",
                    "https://media.giphy.com/media/143v0Z4767T15e/giphy.gif",
                    "https://media.giphy.com/media/wnsgren9NtITS/giphy.gif",
                    "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
                    "https://media.giphy.com/media/SLLYpDiMCvKbS/giphy.gif",
                    "https://media.giphy.com/media/JGNmo9nBmmy8U/giphy.gif",
                    "https://media.giphy.com/media/Ih16mYfbCQDKw/giphy.gif",
                    "https://media.giphy.com/media/fLv2F5rMY2YWk/giphy.gif",
                    "https://media.giphy.com/media/svXXBgduBsJ1u/giphy.gif",
                    "https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif",
                    "https://media.giphy.com/media/u9BxQbM5bxvwY/giphy.gif"
                ]
                let gif = hug[Math.floor(Math.random()*hug.length)];
                if(heremember){
                    if(message.author.id === member.id) {
                    message.reply("Vous ne pouvez pas vous faire de calin à vous même.")
                    }
                    else if(message.content.split(" ").slice(2)){
                            let hugf = message.content.split(" ").slice(2);
                            let hug = new Discord.RichEmbed()
                            .setTitle(`🔰 𝘼 𝙎𝙚𝙡𝙛𝘽𝙤𝙩`)
                            .setDescription(message.author + " 𝗼𝗳𝗳𝗿𝗲 𝗱𝘂 𝗿𝗲́𝗰𝗼𝗻𝗳𝗼𝗿𝘁̀ 𝗮̀ " + member)
                            .setImage(gif)
                            .setFooter(hugf.join(" "))
                            message.channel.send(hug)
                        }
                        else{
                            let hug = new Discord.RichEmbed()
                            .setTitle(`🔰 𝘼 𝙎𝙚𝙡𝙛𝘽𝙤𝙩`)
                            .setDescription(message.author + " 𝗼𝗳𝗳𝗿𝗲 𝗱𝘂 𝗿𝗲́𝗰𝗼𝗻𝗳𝗼𝗿𝘁̀ 𝗮̀ " + member)
                            .setImage(gif)
                            message.channel.send(hug)
                            }
                        }
                else{
                     message.reply('Veuillez mentionner un utilisateur !')
            }
    }
            if(message.content.startsWith(prefix.basique + "kiss")){
                let member = message.mentions.users.first();
                let heremember = member;
                let kiss = [
                    "https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif",
                    "https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif",
                    "https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif",
                    "https://media.giphy.com/media/dP8ONh1mN8YWQ/giphy.gif",
                    "https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif",
                    "https://media.giphy.com/media/11k3oaUjSlFR4I/giphy.gif",
                    "https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif",
                    "https://media.giphy.com/media/Ka2NAhphLdqXC/giphy.gif",
                    "https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif"
                ]
                let kgif = kiss[Math.floor(Math.random()*kiss.length)];
                if(heremember){
                    if(message.author.id === member.id) {
                        message.reply("Vous ne pouvez pas vous embraser vous même.")

                    }
                    else if(message.content.split(" ").slice(2)){
                        let kissf = message.content.split(" ").slice(2);
                    let kiss = new Discord.RichEmbed()
                    .setTitle(`🔰 𝘼 𝙎𝙚𝙡𝙛𝘽𝙤𝙩`)
                    .setDescription(message.author + " 𝗼𝗳𝗳𝗿𝗲 𝘂𝗻 𝗱𝗲́𝗹𝗶𝗰𝗮𝘁 𝗯𝗮𝗶𝘀𝗲́ 𝗮̀ " + member)
                    .setImage(kgif)
                    .setFooter(kissf.join(" "))
                    message.channel.send(kiss)
                }
                else {
                    let kiss = new Discord.RichEmbed()
                    .setTitle(`🔰 𝘼 𝙎𝙚𝙡𝙛𝘽𝙤𝙩`)
                    .setDescription(message.author + " 𝗼𝗳𝗳𝗿𝗲 𝘂𝗻 𝗱𝗲́𝗹𝗶𝗰𝗮𝘁 𝗯𝗮𝗶𝘀𝗲́ 𝗮̀ " + member)
                    .setImage(kgif)
                    message.channel.send(kiss)
                } 
                
            }
                else {
                message.reply('Veuillez mentionnez un utilisateur !')
                }
            }
        if(message.content.startsWith(prefix.basique + "stats")){
            const member = message.mentions.users.first();  
            const heremember = member
            if(message.guild){
            if(heremember){
                console.log('statistique de ' + member)
                let statso = new Discord.RichEmbed();
                statso.setThumbnail(member.avatarURL)
                statso.setTitle(`🔰 𝘼 𝙎𝙚𝙡𝙛𝘽𝙤𝙩`)
                statso.setDescription (`🔗 ID : __**${member.id}**__\n🔗 TAG : __**${member.tag}**__\n🔗 Création : __**${moment.utc(member.createdAt).format('LL')}**__\n🔗 Rejoins le : __**${moment.utc(member.joinedAt).format("LL")}**__`)
            message.channel.send(statso);    
            }
            else {
                let statss = new Discord.RichEmbed();
                statss.setTitle(`🔰 𝘼 𝙎𝙚𝙡𝙛𝘽𝙤𝙩`)
                statss.setDescription (`🔗 ID : __**${message.author.id}**__\n🔗 TAG : __**${message.author.tag}**__\n🔗 Création : __**${moment.utc(message.author.createdAt).format('LL')}**__\n🔗 Rejoins le : __**${moment.utc(message.author.joinedAt).format("LL")}**__\n🔗 nombre de rôles : __**${message.member.roles.size}**__`)
                statss.setThumbnail(message.author.avatarURL)

            message.channel.send(statss);  
            }
        }
        else {
            if(heremember){
                console.log('statistique de ' + member)
                let statso = new Discord.RichEmbed();
                statso.setThumbnail(member.avatarURL)
                statso.setTitle(`🔰 𝘼 𝙎𝙚𝙡𝙛𝘽𝙤𝙩`)
                statso.setDescription (`🔗 ID : __**${member.id}**__\n🔗 TAG : __**${member.tag}**__\n🔗 Création : __**${moment.utc(member.createdAt).format('LL')}**__`)
            message.channel.send(statso);    
            }
            else {
                let statss = new Discord.RichEmbed();
                statss.setTitle(`🔰 𝘼 𝙎𝙚𝙡𝙛𝘽𝙤𝙩`)
                statss.setDescription (`🔗 ID : __**${message.author.id}**__\n🔗 TAG : __**${message.author.tag}**__\n🔗 Création : __**${moment.utc(message.author.createdAt).format('LL')}**__`)
                statss.setThumbnail(message.author.avatarURL)

            message.channel.send(statss);  
            }

        }
        }
        if(message.content.startsWith(prefix.basique + "say")){
            message.delete();
            let args = message.content.split(" ").slice(1);

            let msg = args.join(" ")
            
            let say = new Discord.RichEmbed()
            .setDescription(msg)
            message.channel.send(say)
        }

}
}
})

Client.login(config.token)
Client.login("NDIzOTI5MzEwNDA4MzQzNTYz.XOwGkg.ywGKw4VrQY9tDTQJK6nRsgtGk20")
