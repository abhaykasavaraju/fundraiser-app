import React,{useState,useEffect } from 'react'
import {Form} from 'react-bootstrap';
import {Link,NavLink,Redirect,Route }from 'react-router-dom';

function Search() {
    const [name,setName]=useState('')
    const [redirect,setRedirect] = useState(false)
    const handleSubmit = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        setRedirect(true);
    }
    useEffect(() => {
        setRedirect(false)
      });
    return (
        <div>
            {console.log(redirect)}
            <Form onSubmit={handleSubmit}>
                <Form.Control type="input" placeholder="Search for a member" value={name} onChange={e=>setName(e.target.value)} />
            </Form>

            {redirect?<> 
            <Redirect to={{pathname:"/profile", state :{name : name}}}/>
            
            
            </>:''}
        </div>
    )
}

export default Search
