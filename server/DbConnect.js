
const mongoose = require("mongoose");



module.exports =async()=>{
    const mongourl ="mongodb+srv://bipashamalik1:iHK4AHPmfTGYbCFl@cluster0.ucqbrun.mongodb.net/?retryWrites=true&w=majority"
    try{
       const connect =await mongoose.connect(mongourl)
       console.log(`mongodb connected:${connect.connection.host}`)
}
catch{
    console.log("errorrrrrr from database connectivity")
    process.exit(1)
}


}

