const telegram = require('./index.js');
const axios= require('axios');

telegram.on('message', (message)=>{
    if(message.text.indexOf('/Discord ')== 0){
        const comando= message.text.replace('/Discord ', '');

        switch(comando){
        case 'user':
            axios.get('http://localhost:3000/bot')
                .then(contenido=> 
                    telegram.sendMessage(process.env.DTid, `${contenido.data}`));
            break;        
        case 'grupo':
            axios.get('http://localhost:3000/guild')
                .then(contenido=> telegram.sendMessage(process.env.DTid, `${contenido.data}`));
            break;        
        }
    }
});