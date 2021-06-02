const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  
    message : {
        type : String,
        required : true
    },

    sender : {
        type : String,
        required : true,

    },
    receiver : {
        type: String,
        required : true
    },
    comments :[{
      commentSender:{
          type: String,
          required: true
      },
      comment : {
          type:String
      }  
    }]
    
    
}, {
  timestamps: true,
});

const Post = mongoose.model('posts', postSchema);

module.exports = Post;