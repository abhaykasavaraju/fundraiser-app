const mongoose = require('mongoose')

const job = new mongoose.Schema({
    position : {
        type:String,
        required: true
    },

    summary : {
        type:String,
        required:true
    },

    

    link :{
        type : String,
        require : true
    }

})

module.exports = mongoose.model('job', job);

