const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name :{
        type : String
    }
});

// Define a model for the data
const User = mongoose.model('User', userSchema);
module.exports = User