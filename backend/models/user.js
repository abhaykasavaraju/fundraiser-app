const mongoose = require('mongoose')

const user = new mongoose.Schema({
    rollno : {
        type:String,
        required: true
    },

    name : {
        type:String,
        required:true
    },

    mail : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    },

    repassword : {
        type : String,
        required : true
    },

    // idcardpic :{
    //     type : String
    // },

    image:{
        type : String
    }

})

module.exports = mongoose.model('user', user);

