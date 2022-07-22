require ('dotenv').config();
const telegram= require('../../slim/index.js');

module.exports= function reaccionDiscord(reaction, user){

    if(reaction.message.content != null){
        try{
            telegram.sendMessage(process.env.DTid,`${user.username} reaciono con un ${reaction._emoji.name}`);
        }catch(e){
            console.log('Error al enviar a Telegram');
            return;
        }
        reaction.message.reply(`${user.username} reaciono con un ${reaction._emoji.name}`);
    }
    else{
        reaction.message.reply('Mensaje reaccionado no esta en la cache');
    }
    return;
   
};


