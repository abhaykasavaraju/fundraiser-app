import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './CardSample.css'
import Messages from './Messages'
import {Container,Row,Col} from 'react-bootstrap'
export class CardSample extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={7}>
                            <div class="card-parent">

                                <Card className="card-main">
                                    <Card.Header className="card-header" as="h5">Fund Raising</Card.Header>
                                    
                                    <Card.Body>
                                            <Card.Title>Covid Relief Fund</Card.Title>
                                            <Card.Text>
                                                Help students bear expenses to tackle Covid 19.
                                            </Card.Text>
                                            <img className="card-image" src="https://www.tipsons.com/images/data/9.jpg"></img>
                                            <br></br><br></br>
                                            <Link to={{pathname: "/fundraisers"}}><Button variant="warning">Go To Fundraisers</Button></Link>
                                        </Card.Body>
                                </Card>
                                
                                <Card className="card-main">
                                <Card.Header className="card-header"  as="h5">Jobs</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Apply to Amazon</Card.Title>
                                        <Card.Text>
                                        Apply for jobs and grow your career.
                                        </Card.Text>
                                        <img className="card-image" src="https://d2qhfytuodj4jf.cloudfront.net/dev/wp-content/uploads/2019/07/16144557/5-Reasons-You-Shouldnt-Post-Jobs-Manually.png"></img>
                                        <br></br><br></br>
                                        <Link to={{pathname: "/jobs"}}><Button variant="primary">Go To Jobs</Button></Link>
                                    </Card.Body>
                                </Card>



                                <Card className="card-main">
                                <Card.Header className="card-header"  as="h5">Events</Card.Header>
                                    <Card.Body>

                                        <Card.Title>Seminar on Javascript Basics</Card.Title>
                                        <Card.Text>
                                        Attend events to connect with your network and gain knowledge.
                                        </Card.Text>
                                        <img className="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFAmtAyO1CiR5zcMCYS4ciD54jF24_3Tb66Q&usqp=CAU"></img>
                                        <br></br><br></br>
                                        <Link to={{pathname: "/events"}}><Button variant="danger">Go To Events</Button></Link>
                                    </Card.Body>
                                </Card>

                                

                            </div>
                    </Col>

                    <Col lg={4}>
                         <Messages></Messages> 
                    </Col>
            </Row>
            </Container>
        )
    }
}

export default CardSample
