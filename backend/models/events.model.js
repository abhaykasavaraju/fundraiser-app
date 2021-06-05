const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
   src:{
       type:String
   },
   text:{
    type:String
   },
   label:{
    type:String
   },
   path:{
    type:String
   },
   description:{
    type:String
   },
   img:{
    type:String
   },
   date:{
    type:String
   }
}, {
  timestamps: true,
});

const Event = mongoose.model('events', eventsSchema);

module.exports = Event;