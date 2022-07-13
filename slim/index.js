
require ('dotenv').config();
const Slimbot = require('slimbot');
const slimbot = new Slimbot(process.env.DTToken);

module.exports= slimbot;