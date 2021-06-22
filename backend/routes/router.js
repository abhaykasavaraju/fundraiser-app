express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const user = require('../models/user')
const multer = require('multer')
const path = require('path')
app.use(express.static(path.join(__dirname, '../../public')));
console.log(path.join(__dirname, '../../public'))
var Storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/uploads')  )      //you tell where to upload the files,
  },

    filename:(req,file,cb)=>{
        cb(null,Date.now() +file.originalname);
      }
});

var upload = multer({
    storage: Storage
  }).single('image');
  
app.get('/find',jsonParser, async(req, res)=> {
    
    user.find()
    .then(exercise=>res.json(exercise))
    .catch((e)=>console.log(e))
   
});

app.get('/image/:name',async(req,res)=>{
  user.find({"name":req.params.name})
  .then(user=>res.json(user))
  .catch((e)=>console.log(e))
});

app.get('/find/:user',jsonParser, async(req, res)=> {

    const reg =  new RegExp(req.params.user,'i'); 
    user.find({"name":{$regex : reg }}) 
    .then(user=>res.json(user))
    .catch((e)=>console.log(e))
   
});

app.post("/add",upload,async(req,res)=>{
      const name = req.body.name;   
      const rollno = req.body.roll;
      const mail = req.body.mail;
      const password = req.body.pass;
      const repassword = req.body.repass;
    //   const idcardpic = req.body.pic;
      const img = req.file.filename;
    
      const newuser = new user({
          name:name,
          rollno:rollno,
          mail:mail,
          password:password,
          repassword:repassword,
          //idcardpic: idcardpic,
          image : img
      });
 
      newuser.save()
      .then(()=>{res.json('user Added!')})
      .catch((e)=>{console.log("user not  added")})

      console.log(newuser)
      
  
  });

  app.route('/delete/:rollno').get((req, res) => {
    user.remove({"rollno":req.params.rollno})
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
module.exports = app;
