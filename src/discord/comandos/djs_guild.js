require('dotenv').config();
const axios= require('axios');

const djs_guild= async ()=>{
    try{   
        const res= await axios.get(process.env.DSAPI+'/guilds/'+process.env.DSidgrupo,{
            headers: {
                'Authorization': 'Bot '+process.env.DSTOKEN ,
                }
        });
        const body= await res.data.name;
        return body;
    }catch(error){
        console.log(error);
    }
}

module.exports ={
    djs_guild
}