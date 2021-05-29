const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fundraiserSchema1 = new Schema({
    heading : {
    type: String,
    required: true,
    unique: true,
   
  },
    description :{
      type:String
  },
    goalAmount :{
      type: Number,
      required : true,
 },
    collectedAmount :{
        type:Number,
        required : true
    },
    postedBy :{
        type:String,
        required : true
    },
    UPI:{
        type:String,
        required : true
    },
    email:{
        type:String,
        required : true
    },
    phoneNumber : {
        type :String,
        required: true
    },
    isSelected:{
        type : Boolean,
        required : true
    },

    showDetails :{
        type : Boolean,
        required : true
    }
    
    
}, {
  timestamps: true,
});

const FR = mongoose.model('FR1', fundraiserSchema1);

module.exports = FR;