
import React, { useState } from 'react'
import './Signin.css'
import {Link,Redirect} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const Signin = (props) => 
{
  const [name,setName] =  useState()
  const [roll,setRoll] = useState()
  const [pass,setPass] = useState()
  const [arr,setarr] =  useState([])
  const [val,setval] = useState(0)
  axios.get('http://localhost:5000/users/find').then((res)=>{setarr(res.data);})
  
  

  

  const submit = ()=>
  {
    
        const temp = arr.find((o)=>o.rollno==roll && o.password==pass)
        
        
        if(typeof(temp) != "undefined")
        {
          setName(temp.name)
          setval(3)
        }

        else
        {
          setval(2)
          alert("invalid")
        }
        
        

        console.log(val)

         
  }

  if(val==3)
  {
    console.log(name)
    console.log(props)
    props.usernameCallBack(name)
    return (<><Redirect to={{pathname : "/home" ,state:{name: name}}}/></>)
  }

  const temp = 'url("https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-retro-time-recalling-the-year-of-the-alumni-association-image_194183.jpg")'

    return (
        <>

    
    <div  className="div1" style={{backgroundImage:temp}}>
      
    <h1 className="h1">Please Fill In This Form To Login</h1>

<form className="form1">
  
    <br/>

    <label ><b>Roll No.</b></label><br/>
    <input style={{width:'300px'}} type="text" placeholder="Enter " name="rollno"  onChange={(e)=>{setRoll(e.target.value)}} />
    <br/>
    <label ><b>Password</b></label><br/>
    <input style={{width:'300px'}} type="password" placeholder="Enter Password" name="psw" onChange={(e)=>{setPass(e.target.value)}} />
    

    <br/>
    
    
    
        <br/><br/>
    
    <Button type="button" className="btn btn-success" onClick={submit} >Login</Button>
    <Link to="/signup"><Button type="button" className="btn btn-danger" style={{marginLeft:'40px'}}>Sign Up</Button></Link>
      <br/><br/>
  
    </form>
  </div>   

  
        </>
    )
}

export default Signin;
