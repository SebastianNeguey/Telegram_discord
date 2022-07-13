require ('dotenv').config();
const {Client, Intents} = require('discord.js');
const telegram = require('../slim/index.js');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});


client.once('ready', c=>{
    console.log(`bot listo ${c.user.tag}`);
});

client.on("messageCreate", c=>{
    if(c.author.bot) return;
    if(c.content.indexOf('!bt Telegram ')==0){
        telegram.sendMessage(process.env.DTid,c.content.replace('!bt Telegram ', ''));
        telegram.startPolling();
        c.reply('Enviado');
    }
});

client.login(process.env.DSTOKEN);
