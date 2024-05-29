const {sucess} = require("../utils/responseWrapper")

const getPostController = async(req,res)=>{
   // console.log(req._id)
   // return res.send("post home page")
   return res.send(sucess(201,"post home page"));
}

module.exports = {getPostController}


