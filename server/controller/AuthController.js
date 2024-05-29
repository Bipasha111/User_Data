
const User = require('../module/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { use } = require('../router/postRouther');
const {error} = require("../utils/responseWrapper")
const {sucess}= require("../utils/responseWrapper")


const  singup =async(req,res)=>{
    try {
        
        const {email,password} = req.body;
        console.log(email);
        console.log(password);

        if(!email || !password){
            // return res.status(400).send("khali bharo")
            return res.send(error(400,"all fields are required fill karo name amd email"))
        }

        const oldUser= await User.findOne({email})
        if(oldUser){
            // return res.status(409).send("user is already regitered")
            return res.send(error(409,"user is already regitered"))
        }
        

        const hashedpassword =await bcrypt.hash(password,10)
        const user  = await User.create({
            email,password:hashedpassword
        });
        // return res.status(201).json({user})
        // success code send
        console.log(user)
        const accesToken=accesstoken({
            _id: user._id,
           email:user.email,
            })

const refreshToken = Refresstoken({
_id: user._id,
email:user.email,
}) 





        // return res.send(sucess(201,{user,accesstoken}));
        return res.send(sucess(201,{user,accesToken,refreshToken}));
    } catch (e) {
                          console.log("error from singup ")
                    }

}



const login  =async(req,res)=>{
    try {
     
        const {email,password} = req.body;
        
        if(!email || !password){
            // return res.status(400).send("fill the email or password")
            return res.send(error(400,"fill the email or password"))
           
        }

        const user = await User.findOne({email})
        if(!user){
            // return res.status(404).send("user not found")
            return res.send(error(404,"user not found"))
        }

        const match = await bcrypt.compare(password,user.password)
        if(!match){
            // return res.status(403).send("incorrect password");
            return res.send(error(403,"incorrect password"))
        }
        // return res.status(201).json({user})
        //it will not send user directy insteand of jesonwebtoken 

    

        
       const accesToken=accesstoken({
                            _id: user._id,
                           email:user.email,
                            })

       const refreshToken = Refresstoken({
        _id: user._id,
        email:user.email,
       }) 
       
       
    //    ________________________________cookie_____________________________
       res.cookie('jwt',refreshToken,{
        httpOnly:true,
        secure:true,
       })
       
    //    return res.json({accesToken,refreshToken});
    return res.send(sucess(201,{accesToken,refreshToken}));
    } catch (e) {
        console.log("error from loginnn")
    }    
};


 // this refresh token will check refresh validity  and generate a new access token
 const  refrshTokenController = async(req,res)=>{
    // const {refreshToken} =req.body;
    const cookie =req.cookies;

    if(!cookie.jwt){
        // return res.status(401).send("authantication: refrsh token nhi mila")
        return res.send(error(401,"authantication: refrsh token nhi mila"))
    }
    const refreshToken =cookie.jwt;
    console.log("RefreshToken     "+refreshToken)

    // if(!refreshToken){
    //     return res.status(401).send("refreshtoken nhi mila")
    //        }
    // console.log("mila  "+ refreshToken)
    
    try {
        const decode = jwt.verify(refreshToken,"232323");
        const _id =decode._id;
        console.log("idddddd            "+_id)

    // const accesstoken=accesstoken({_id})
    // console.log("abhi tk thik hai  ==="+accesstoken)
    //     return res.status(201).json({accesstoken})

    const accessToken =accesstoken({_id})
    // return res.json({a})
    return res.send(sucess(201,{accessToken}));
        
    } catch (error) {
        console.log("error from refretoken")
        // return res.status(401).send("invalid refress token")
        return res.send(error(401,"invalid refress token"))
        
    }
 }

const accesstoken =(data)=>{
    const secretKey = 'your_secret_key_here';
    try{
    const token  =   jwt.sign(data,secretKey,{expiresIn:"20s"});
    console.log(token)
    return token;
   }catch(e){
           console.log("error from accesstoken")
   }
}

const Refresstoken =(data)=>{
    const p="232323"
    try{
    const token  =   jwt.sign(data,p,{expiresIn:"1y"});
    console.log(token)
    return token;
   }catch(e){
           
           console.log("error from Refresstoken")
   }
}


module.exports ={login,singup,refrshTokenController}