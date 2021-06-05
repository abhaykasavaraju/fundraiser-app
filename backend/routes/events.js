const router = require('express').Router();
let Event = require('../models/events.model');

router.route('/').get((req, res) => {
    Event.find()
      .then(events => res.json(events))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/add').post((req, res) => {
    const src  = req.body.src;
    const text=req.body.text;
    const label = req.body.label;
    const path = req.body.path;
    const description = req.body.description;
    const img = req.body.img;
    const date = req.body.date;
    const event = new Event({src,text,label,path,description,img,date});
  
    event.save()
      .then(() => res.json('Event added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  

module.exports = router;