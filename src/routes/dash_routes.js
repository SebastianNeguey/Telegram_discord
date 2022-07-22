const express= require("express");

const {djs_bot}= require("../discord/comandos/djs_discord.js");
const {djs_guild}= require("../discord/comandos/djs_guild.js");

const router= express();
router.get("/bot", async(req, res)=>{
    const guild= await djs_bot();
    res.json(guild);
});
router.get("/guild", async(req, res)=>{
    const guild= await djs_guild();
    res.json(guild);
});




//router.post("/dash/:id/prefix", async(req, res)=>{});

router.listen(3000, ()=>{
    console.log('uuu')
});
//module.exports= router;

