const Chat = require("./models/chat.js");
const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsup");
}

main().then(() => {
    console.log("Connection Successful");
}).catch((err) => {
    console.log(err);
});

Chat.insertMany([
    {
        from: "Neha",
        to: "Priya",
        message: "Send me your exam sheet",
        created_at: new Date() // UTC
    },
    {
        from: "Raj",
        to: "Neha",
        message: "Are you coming to the party?",
        created_at: new Date() // UTC
    },
    {
        from: "Priya",
        to: "Raj",
        message: "I'll be there in 10 minutes.",
        created_at: new Date() // UTC
    },
    {
        from: "Neha",
        to: "Raj",
        message: "Can you send me the notes from today's class?",
        created_at: new Date() // UTC
    }
]).then((res) => {
    console.log("Data inserted:", res);
}).catch((err) => {
    console.log("Error inserting data:", err);
});
