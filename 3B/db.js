const mongoose = require("mongoose") 
url="mongodb+srv://aditya:aditya123@cluster0.aatzftw.mongodb.net/?retryWrites=true&w=majority"

function connect(){
    mongoose.connect(url).then((res)=>{
        console.log("Connected to db");
    });
}

module.exports = connect
