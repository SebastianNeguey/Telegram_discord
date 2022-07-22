require ('dotenv').config();
const telegram= require('../../slim/index.js');

module.exports= function mensajeTelegram(c){
    if(c.author.bot) return;
    if(c.content.indexOf('!bt Telegram ')==0){
        try{
            telegram.sendMessage(process.env.DTid,c.content.replace('!bt Telegram ', ''));
        }catch(e){
            console.log('Error al enviar a Telegram');
            return;
        }
        c.reply('Enviado');
    }
    return;
};