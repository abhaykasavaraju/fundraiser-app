express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const user = require('../models/user')

app.get('/find',jsonParser, async(req, res)=> {
    
    user.find()
    .then(exercise=>res.json(exercise))
    .catch((e)=>console.log(e))
   
});

app.get('/find/:user',jsonParser, async(req, res)=> {

    const reg =  new RegExp(req.params.user,'i'); 
    user.find({"name":{$regex : reg }}) 
    .then(user=>res.json(user))
    .catch((e)=>console.log(e))
   
});

app.post("/add",jsonParser,async(req,res)=>{
  

      const name = req.body.name;   
      const rollno = req.body.roll;
      const mail = req.body.mail;
      const password = req.body.pass;
      const repassword = req.body.repass;
      const idcardpic = req.body.pic;
    
      const newuser = new user({
          name:name,
          rollno:rollno,
          mail:mail,
          password:password,
          repassword:repassword,
          idcardpic: idcardpic
      });
 
      newuser.save()
      .then(()=>{res.json('user Added!')})
      .catch((e)=>{console.log("user not  added")})

      console.log(newuser)
      
  
  });
  
module.exports = app;
