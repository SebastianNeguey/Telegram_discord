
require ('dotenv').config();
const Slimbot = require('slimbot');
const slimbot = new Slimbot(process.env.DTToken);

// Register listeners

/*function enviarMessage(text){
    slimbot.sendMessage(5551020354, text);
}

// Call API

slimbot.startPolling();

*/

module.exports= slimbot