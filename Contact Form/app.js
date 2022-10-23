require("dotenv").config()
const express=require("express")
const app=express()
require("./db/connect")
const User=require("./db/model")
const port=process.env.PORT||3000
const bodyparser=require("body-parser")
app.use(express.static('public'))
app.use("/style",express.static(__dirname+"/public/style"))
app.use(bodyparser.json())

app.use(bodyparser.urlencoded({
    extended:true
}))//is required for .body function to fetch data
app.get("/",(req,res)=>
{
    res.sendFile("public/index.html")
})
app.post('/',async(req,res)=>
{
    const user=new User(
        {
            name:req.body.name,
            email:req.body.email,
            gender:req.body.gender,
            phone:req.body.phone,
            Description:req.body.Description,
        }

    )
    const use=await user.save()//instance name is used na ki main class ka 
    console.log(use)
     res.sendFile("W:/VS CODE/WEBDEVP-2/Contact Form/public/success.html")
})
app.listen(port,()=>
{
    console.log(`Server is running on port ${port}`)
})