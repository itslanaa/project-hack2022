const mongoose=require("mongoose")
const contactSchema=mongoose.Schema({
    name:
    {
        type:String
    },
    email:
    {
        type:String
    },
    gender:
    {
        type:String
    },
    phone:
    {
        type:Number
    },
    Description:
    {
        type:String
    }
})
const User=new mongoose.model("User",contactSchema)
module.exports=User;