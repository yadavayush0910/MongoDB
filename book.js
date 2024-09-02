const mongoose=require("mongoose");
async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
main().then(()=>{
    console.log("Connection Successful");
})

const bookSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:20
    },
    author:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        min:[1,"Price is too low"]
    },
    discount:{
        type:Number,
        default:0
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"]
    },
    genre:[String]
  });

const Book= mongoose.model("Book",bookSchema);

const book1= new Book({
    title:"Mathematics XII",
    author:"RD Sharma",
    price:"12",
    category:"fiction",
    genre:["comics","superhero","fiction"]
});
// book1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
Book.findByIdAndUpdate("66d012353674e90fab464741",{price:-200},{runValidators:true})
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
})