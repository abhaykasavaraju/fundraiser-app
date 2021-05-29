import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import './Test.css'

export class Test extends Component {
    render() {
        return (
            <>
                <Container>

                    <Row>

                        <Col md={6} className="left">
                            <p>Col 1</p>
                        </Col>


                        <Col md={6} className="right">
                            <p>Col 2</p>
                        </Col>

                    </Row>
                </Container>
            </>
        )
    }
}

export default Test
