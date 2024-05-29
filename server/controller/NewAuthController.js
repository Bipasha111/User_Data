const User = require('../module/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const loginn = async(req,res)=>{

    try{
        const {password,email} = req.body
        if(!password || !email){
            return res.send("please enter the email and password in login")
        } 

       
        const user = await User.findOne({email})

        const match = await  bcrypt.compare(password,user.password)
        if(!match){
            return res.send("inncorrect password")
        }
        // return res.json({user})
        const accessToken =get({_id:user._id,email:user.email})
    return res.send({accessToken})

    }catch(error){
          console.log("error from new login")
    }
}
//internal function 
                        const get =(data)=>{
                            try{
                                const secretKey = 'your_secret_key_here';
                                const token = jwt.sign(data, secretKey, { expiresIn: '1h' });
                                // const token = jwt.sign(data,'xxxx',{expiresIn:"40m"})
                            console.log(token)
                                return token;
                        }catch{
                                console.log("error from get function")
                            }

                          
                               
                        }
                      

module.exports ={loginn}