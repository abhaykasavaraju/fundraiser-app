import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import {Card,Col, Container, Row} from 'react-bootstrap'
import { CgProfile } from "react-icons/cg";
import './UserProfile.css'
function UserProfile(props) {
    const location =useLocation()
    const name = location.state.name
    const [users,newUser] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:5000/users/find/'+name)
        .then(response => { newUser(response.data)
        console.log(response.data)})
        .catch((error) => {
          console.log(error);
        })
        console.log(users)
    },[])
   
  
    
    return (
        <div className="user-cards">
           
            {console.log(typeof(users))}
            {users.map((user,index)=>( 
             <Card border="secondary" text="white"  className="user-card-body">
                    <Card.Body>
                        <Container className="user-card-title">
                            <Row>
                                <Col lg={3}>
                                     
                                    <img className="profile-image" id="profilepic" style={{borderRadius : '60%',paddingBottom:'10px'}} src= {`/uploads/${user.image}`}/> 
                                    
                                </Col>
                                <Col  style={{borderRadius : '50%',paddingTop:'40px',textAlign:'left'}} >
                                     <Card.Title >{user.name}</Card.Title>
                                </Col>
                            </Row>
                        </Container>
                        <Container  style={{ paddingTop: '50px',textAlign:'left'}}>
                            <Card.Text>
                            <span class="badge bg-success">Roll Number</span> {user.rollno}
                            </Card.Text>
                            <Card.Text>
                            <span class="badge bg-danger">E-Mail</span> {user.mail}
                            </Card.Text>
                        </Container>
                    </Card.Body>
            </Card>
            ))}
        </div>
    )
}

export default UserProfile
