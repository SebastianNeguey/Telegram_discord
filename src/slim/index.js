
require ('dotenv').config();
const Slimbot = require('slimbot');
const slimbot = new Slimbot(process.env.DTToken);
slimbot.startPolling();

module.exports= slimbot;