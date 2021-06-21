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
                                    <img className="profile-image" style={{borderRadius : '50%',paddingBottom:'10px'}}src="data:image/jpeg;base64,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"/>

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
