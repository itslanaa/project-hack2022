require("dotenv").config()
const mongoose=require("mongoose")
const url=process.env.MONGO_URL
mongoose.connect(url).then(()=>
{
    console.log("Connection to DB successful")
}).catch((e)=>
{
    console.log(e)
})