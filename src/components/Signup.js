
import {React,useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signin = () => 
{
const [name,setName] = useState('')
const [roll, setRoll] = useState('')
const [mail, setMail] = useState('')
const [pass, setPassword] = useState('')
const [repass,setRepassword] = useState('')
const [pic,setPic] = useState('')

  const submit = (value)=>
  {  
   
    console.log(name)
    console.log(roll)
    console.log(mail)
    console.log(pass)
    console.log(repass)
    console.log(pic)

    const user = {
      name : name,   
      roll : roll,
      mail : mail,
      pass : pass,
      repass : repass,
      pic : pic
  
    }

    axios.post("http://localhost:5000/users/add",user)
    .then(
      (response)=>{
        console.log(response)
      }

    );


  }

  const temp = 'url("https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-retro-time-recalling-the-year-of-the-alumni-association-image_194183.jpg")'

    return (
        <>


       <div style={{backgroundImage:temp,height:'700px',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>  
       <h1 style={{textAlign:'center',paddingTop:'15px',backgroundColor:'black',color:'white',height:'60px'}}>Please fill in this form to signup</h1>
<form   style={{ marginLeft:'33%'}}  >
   
        <br/>

        <label for="roll no"><b>Roll No.</b></label><br/>
        <input type="text" placeholder="Enter Rollno" name="rollno" onChange={(e)=>{setRoll(e.target.value)}} required/>

        <br/>

        <label for="name"><b>Name</b></label><br/>
        <input type="text" placeholder="Enter Name" name="name" onChange={(e)=>{setName(e.target.value)}} required />

        <br/>

        <label for="Mail"><b>Mail.</b></label><br/>
        <input type="text" placeholder="Enter Mail" name="mail" onChange={(e)=>{setMail(e.target.value)}} required/>

        <br/>

        <label for="psw"><b>Password</b></label><br/>
        <input type="password" placeholder="Enter Password" onChange={(e)=>{setPassword(e.target.value)}} name="psw" required/>

        <br/>

        <label for="psw"><b> Reenter the Password</b></label><br/>
        <input type="password" placeholder="Reenter Password" onChange={(e)=>{setRepassword(e.target.value)}} name="psw" required/>
        
        <br/>

        <label for="pic"><b>Upload the college ID</b></label><br/><br/>
        <input type="file" id="myFile" name="filename" onChange={(e)=>{setPic(e.target.value)}}/>
        
        <br/><br/><br/>

       
        <Link to="/registration"><button type="submit" style={{backgroundColor:'green',width:'100px',marginLeft:'200px',height:'40px',borderStyle:'solid',borderWidth:'3px',borderColor:'black'}} onClick={submit}  className="signupbtn" >Sign Up</button></Link>
        
 
</form>
           </div> 
        </>
    )

    
}




export default Signin;