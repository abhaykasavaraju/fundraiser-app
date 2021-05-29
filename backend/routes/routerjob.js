express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const job = require('../models/job')

app.get('/find',jsonParser, async(req, res)=> {
    
    job.find()
    .then(exercise=>res.json(exercise))
    .catch((e)=>console.log(e))
   
});


app.post("/add",jsonParser,async(req,res)=>{
  

    const position = req.body.position;   
    const summary = req.body.summary;
    const link = req.body.link;
 
    const temp = new job({
        position:position,
        summary:summary,
        link:link
    });

    temp.save()
    .then(()=>{res.json('job Added!')})
    .catch((e)=>{console.log("job not  added")})

    console.log(temp)
    

});

module.exports = app