const mongoose = require('mongoose');
async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
main()
.then((res)=>{
    console.log("Connection Successful");
})
.catch((err)=>{
    console.log(err);
})
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})
const User=mongoose.model("User",userSchema);
const Employee= mongoose.model("Employee",userSchema);

const user1= new User({name:"adam",
   email:"adam@yahoo.in",
   age:48
});
const user2= new User({name:"bob",
    email:"bob@yahoo.in",
    age:48
 }).save()
 .then(()=>{
     console.log("Saved Successfully")
 }).catch((err)=>{
 console.log("Error",err);
 })
user1.save()
.then(()=>{
    console.log("Saved Successfully")
}).catch((err)=>{
console.log("Error",err);
})
User.insertMany([
    {
        name:"Tony",
        email:"tony@gmail.com",
        age:50
    },
    {
        name:"Bruce",
        email:"bruce@gmail.com",
        age:30
    },
    {
        name:"Peter",
        email:"peter@gmail.com",
        age:47
    }
])
// .then((res)=>{
//     console.log(res);
// })
// User.find({age:{$gte:147}}).then((data)=>{
//     console.log(data);
// })
// User.find({age:{$lt:10}}).then((data)=>{
//     console.log(data);
// })

User.findById("66cffe3258f08dc39ec8cea2").then((res)=>{
    console.log(res);
})
User.findOne({name:"Peter"}).then((data)=>{
    console.log(data);
})
 User.updateOne({name:"Bruce"},{age:49}).then((res)=>{
    console.log(res);
 }).catch((err)=>{
    console.log(err);
 })
 User.updateMany({age: {$lt:50}},{age:40}).then((res)=>{
    console.log(res);
 }).catch((err)=>{
    console.log(err);
 })
 User.findOneAndUpdate({name:"Bruce"},{age:35},{new:true})
 .then((res)=>{
    console.log(res);
 })
 .catch((err)=>{
    console.log(err);

 })
 User.findByIdAndUpdate("66cfe3e88d2ebeb9fdabe06c", { age: 10 }, { new: true })
 .then((data) => {
   console.log(data);
 })
 .catch((error) => {
   console.error(error);
 });

 User.deleteMany({name:"Adam"})
 .then((res)=>{
    console.log(res);
 })
.catch((err)=>{
    console.log(err);
})
User.findByIdAndDelete("66ac87b3e9e60fe7b1df0a69")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
  User.findOneAndDelete("66ac87c86782500c5b2b10b5")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
