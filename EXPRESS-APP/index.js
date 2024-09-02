const express= require("express");
const app= express();
const path=require("path");
const Chat=require("./models/chat.js")
const mongoose= require("mongoose");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.urlencoded({ extended: true }));
async function  main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsup")
}
main().then(()=>{
    console.log("Connection Successful");
}).catch((err)=>{
    console.log(err);
})

const chat1= new Chat({
    from:"neha",
    to:"Priya",
    message:"Send me your exam sheet",
    created_at: new Date() //UTC
});
chat1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

//Index Route
app.get("/chats",async(req,res)=>{
   let chats= await Chat.find();
   res.render("index.ejs",{chats});
})
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")
})
app.get("/",(req,res)=>{
    res.send(" is Working");
})
//CREATE ROUTE
app.post("/chats",(req,res)=>{
     let{from,to,msg}=req.body;
     let newChat= new Chat({
        from:from,
        to:to,
        message:message
     })
     newChat.save().then((res)=>console.log("Saved")).catch((err)=>console.log("error"));
    res.redirect("/chats");
})
app.listen(8080,()=>{
    console.log("Server is listening at 8080")
})
 