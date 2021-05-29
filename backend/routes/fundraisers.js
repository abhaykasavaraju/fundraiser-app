const router = require('express').Router();
let FR = require('../models/fundraisers.model');

router.route('/').get((req, res) => {
    FR.find()
      .then(fundraisers => res.json(fundraisers))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post((req, res) => {
    const heading  = req.body.heading;
    const description = req.body.description;
    const goalAmount = req.body.goalAmount;
    const collectedAmount = req.body.collectedAmount;
    const postedBy= req.body.postedBy;
    const email = req.body.email;
    const UPI = req.body.UPI;
    const phoneNumber = req.body.phoneNumber;
    const isSelected = req.body.isSelected;
    const showDetails = req.body.showDetails;
    const fr = new FR({heading,description,goalAmount,collectedAmount,postedBy,email,UPI,phoneNumber,isSelected,showDetails});
  
    fr.save()
      .then(() => res.json('Fundraiser added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  

module.exports = router;