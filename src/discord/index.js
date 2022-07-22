require ('dotenv').config();
const client = require('./config.js');

const mensajeTelegram = require('./process/mensajeTelegram.js');
const reaccionDiscord= require('./process/reaccionDiscord.js');


client.on("messageCreate", (c)=>{
    mensajeTelegram(c);
}); 

client.on('messageReactionAdd', (reaction, user)=>{
    reaccionDiscord(reaction,user);
});





