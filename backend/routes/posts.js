const router = require('express').Router();
let Post = require('../models/post.model');

router.route('/').get((req, res) => {
    Post.find()
      .then(posts => res.json(posts))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/addcomments/:id').post((req,res) => {
    Post.findOneAndUpdate({"_id" : req.params.id},{$push : {"comments" : {"commentSender" : req.body.sender,"comment" : req.body.comment}}})
    .then(()=>res.json("Comment added"))
    .catch(err=>res.status(400).json('This is an error Error: ' + err));
  })

  router.route('/:receiver').get((req, res) => {
    Post.find().or([{"receiver":req.params.receiver},{"sender":req.params.receiver}])
      .then(posts => res.json(posts))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:receiver/delete').get((req, res) => {
    Post.remove().or([{"receiver":req.params.receiver},{"sender":req.params.receiver}])
      .then(posts => res.json(posts))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post((req, res) => {
    const sender =   req.body.sender;
    const receiver = req.body.receiver;
    const message  = req.body.message;
    const comments = req.body.comments    
    const post = new Post({sender,receiver,message,comments});
  
    post.save()
      .then(() => res.json('Post added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports = router;