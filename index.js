const Discord = require('discord.js');
const client = new Discord.Client();
const {token,prefix} = require('./config.json')

client.on("ready", () => {
    console.log("Konoha-Maru prêt")
    
    client.user.setPresence({
        statuts:"online",
        activity:{
            name:"Konoha",
            type:"STREAMING"
        }
    })
});
        
client.on("guildMemberAdd", async (member) => {
  let guild = client.guilds.cache.get("767062908193996800");
  let channel = client.channels.cache.get("767062908591931408");
  let emoji = member.guild.emojis.cache.find((emoji) => emoji.name === "coeur");
  if (guild != member.guild) {
    return console.log("un membre a rejoint le serveur");
  } else {
    let embed = new Discord.MessageEmbed()
      .setColor("#00bbdd")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${emoji} Bienvenue ${emoji}`)
      .setImage(
        "https://cdn.discordapp.com/attachments/761955712623575050/767289026239397898/6f11b91bde9f90c34fe92a0fe1321427bb49656d_hq.gif",
      )
      .setDescription(
        `${member.user} bienvenue sur le serveur ${guild.name}! Nous sommes desormais ${member.guild.memberCount} membres.`,
      )
      .addField(
        "⛔Regles",
        "Suivez les règles du serveur <#767062908591931405> ",
      )
      .addField(
        "🔑Roles",
        "Veuillez aller prendre vos roles dans: <#767291258124632095> et <#767291321613680641> ",
      )
      .setThumbnail(
        member.user.displayAvatarURL({
          dynamic: true,
          format: "png",
          size: 1024,
        }),
      )
      .setFooter("ID du membre: " + member.user.id)
      .setTimestamp();

    await channel.send(embed);
  }
});

client.login(token);