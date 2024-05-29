const dotenv = require('dotenv')
const express = require("express");
const app = express();
const morgan = require("morgan")
const dbCon = require("./DbConnect")
const AuthRouter = require('./router/AuthRouter')
const PostRouter = require('./router/postRouther')
const cookies = require('cookie-parser')
const cors = require("cors");

//middlewares
app.use(express.json())
app.use(morgan('common'))
app.use(cookies())
app.use(cors({
    credentials:true, 
    origin:"http://localhost:3000"
    
}))



app.use("/auth",AuthRouter)
app.use("/post",PostRouter)

dbCon();
app.listen(8000,()=>{
    console.log("api is created")
})



