require('dotenv').config();
const axios= require('axios')

const djs_bot= async ()=>{
    try{   
        const res= await axios.get(process.env.DSAPI+'/users/'+process.env.DSid,{
            headers: {
                'Authorization': 'Bot '+process.env.DSTOKEN ,
                }
        });
        const body= await res.data.username;
        return body;
    }catch(error){
        console.log(error);
    }
}

module.exports ={
    djs_bot
}


