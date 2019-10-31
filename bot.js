const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("639281795627745286")
setInterval(function() {
channel.send(`toxin toxin toxin toxin toxin toxin toxin toxin`);
}, 30)
})

client.login(process.env.BOT_TOKEN);