import React, { useState } from 'react'
import './Signin.css'
import {Link} from 'react-router-dom';
import axios from 'axios';


const Signin = (value) => 
{

  const [roll,setRoll] = useState()
  const [pass,setPass] = useState()

  

  const submit = async(value)=>
  {
    console.log("hello called")    
   // const token = localStorage.getItem('jwt');
   // const config = {headers : {'x-auth-token' : token}};
    //const users = axios.get("http://localhost:4000/user")  
    //const users =  axios.get('http://localhost:4000/user',config).then(res => console.log('succesfull stuff to be done here')).catch(err => console.error(err))
   
    /*  const response = await axios({
        url: 'http://localhost:4000/user',
        method: 'get'
      }).then((res)=>{console.log(res)})
      console.log(response)*/
       const users = await axios.get('http://localhost:4000/user')
          .then(res => {
            const persons = res.data;            
          console.log(persons)
          })
          console.log(users)
  }

 

  


    return (
        <>
            
            <p style={{textAlign:'center'}}>Please fill in this form to Login.</p>     
<form  style={{border :'1px solid #ccc', paddingLeft:'30%'}}>
  <div className="container">
   
    
    <hr/>

    <label ><b>Roll No.</b></label><br/>
    <input type="text" placeholder="Enter " name="rollno"  onChange={(e)=>{setRoll(e.target.value)}} />
    <hr/>
    <label ><b>Password</b></label><br/>
    <input type="password" placeholder="Enter Password" name="psw" onChange={(e)=>{setPass(e.target.value)}} />

    <hr/>
    
    
    
        <br/><br/><br/>
    <div className="clearfix">
    <Link to="/registration"><button type="submit" className="loginbtn" onClick={submit} style={{backgroundColor:'green'}}>Login</button></Link>
      <Link to="/signup"><button type="button" style={{marginLeft:'50px'}} className="signupbtn">Sign Up</button></Link>
      
    </div>
  </div>
</form>
            
        </>
    )
}

export default Signin;


