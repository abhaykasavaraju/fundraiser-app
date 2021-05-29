import Carousel from 'react-bootstrap/Carousel'
import React, { Component } from 'react'
// import carouselbg from './background.png'
import './CompletedCarousel.css'
import { CarouselItem } from 'react-bootstrap'
import data from '../completedfrdata';
import CompletedDescription from './CompletedDescription'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



export class CompletedCarousel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:data
        }
    }

    handleCarouselClick = (index)=>{

        

        console.log("Here" + this.state.data[index].heading);

        <CompletedDescription heading ={this.state.data[index].heading}
                              description = {this.state.data[index].heading}
                              goalAmount ={this.state.data[index].goalAmount}
        
        ></CompletedDescription>

    }
    
    render() {
        return (
            <div className="carouselParent">

               

                <Carousel>

                {
                    
                    this.state.data.map((fr,index)=>(
                        
                        <CarouselItem className="item"> 

                            <img
                                src={fr.src}
                                className="carouselbg"
                            
                            />
                            <Carousel.Caption>
                               <h3><span className="badge bg-success">{fr.heading}</span></h3>
                               <h3><span className="badge bg-danger">Collected Amount {fr.goalAmount}</span></h3>
                              
                               <Link to={{
                                        pathname: "/knowmore",
                                        state: { heading: fr.heading, description : fr.description, goalAmount : fr.goalAmount, src :fr.src },
                                        }}
                               
                               
                               className="btn btn-warning">Know More</Link>
                                {/* <button className="btn btn-warning" onClick={()=>this.handleCarouselClick(index)}>Know More</button> */}
                              
                            </Carousel.Caption>

                            
                            
                        </CarouselItem>
                       
                    ))
                }
                </Carousel>









            </div>
        )
    }
}

export default CompletedCarousel
