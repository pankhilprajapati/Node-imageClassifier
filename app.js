require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const body = require("body-parser")
const img = require("./models/image")
const app = express()


const url = process.env.DATABASEURL || "mongodb://localhost/image"
mongoose.connect(url)


app.use(body.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname+"./public"))


app.get("/",(req,res)=>{
    res.render("link.ejs")
})

app.get("/upload",(req,res)=>{

    img.find({},(err, i)=>{
        if(err){
            console.log(err)
        }else{
            res.render("yo",{img:i})
        }
    })
})

app.post("/upload",(req, res)=>{
    img.remove({k:1},()=>{
        const image = req.body.image
    const newImg = {
        image: image,
        k: 1
    }
    img.create(newImg,(err,i)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect("/upload")
        }
    })
    })
    
})

app.listen(process.env.PORT || 2002,()=>{
    console.log("Server up on " )
})