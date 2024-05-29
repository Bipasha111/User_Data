const jwt = require('jsonwebtoken')
const {error} = require("../utils/responseWrapper")


module.exports=async(req,res,next)=>{

        //  if(!req.headers|| !req.headers.authorization ||!req.headers.authorization.startsWith("Bearer"))
            if(!req.headers?.authorization?.startsWith("Bearer"))
            {
                // return res.status(401).send("authorization")
                return res.send(error(401,"authorization"))
            }

            const accesstokenn = req.headers.authorization.split(" ")[1];
            console.log(accesstokenn)

            console.log(`token  = ${accesstokenn}`);
            console.log("all ok from accesToken verification") 
            try {
                const secretKey = 'your_secret_key_here';
                const decoded = jwt.verify(accesstokenn,secretKey);
                    req._id =decoded._id;
                    console.log(req._id)
                    console.log("finally verify")
                    next();
                
            } catch (e) {

                console.log("error from invalid key ")
                // res.send("invalid key")
                return res.send(error(401,"invalid acess key"))
                }
            next();  

            // try {
            //     const secretKey = 'your_secret_key_here';
            //         const decoded = jwt.verify(accesstokenn,'xxxx');
            //         req._id =decoded._id;
            //         next();
            // }
            //  catch (error) 
            // {
            //     console.log("error again")
            //     return res.send("invalid key")
            // }
            // next();
            // const secretKey = 'your_secret_key_here';
            // jwt.verify(accesstokenn, secretKey, (err, decoded) => {
            //     if (err) {
            //       console.error('Token verification failed           :', err.message);
            //     } else {
            //       console.log('Decoded token                 :', decoded);
            //     }
            //   });

        };
