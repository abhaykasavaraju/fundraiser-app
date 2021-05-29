import React,{useState} from 'react';

import './ServiceContent.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card'
import { useLocation } from 'react-router';
import { CarouselItem } from 'react-bootstrap'


function ServiceContent() {
    const location=useLocation();
    const temp=location.state.img;
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState(""); 
    const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      Name:${name}
      Email: ${email}
      Phone: ${phone}
      Accepted Terms: ${acceptedTerms}
    `);

    event.preventDefault();
  }
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

    
  return (
      // <> 
      // // <div className="container">
      // //   <div className="level2-title">
      // //       <div className="level2_title_sidelines">
      // //           <h1>{location.state.text}</h1>
      // //       </div>
      // //       <h3>Confabulation of experience</h3>
      // //   </div>
      
      // // </div>   
                        
      // </>
      <div>
        <div className="rowHeading">
          <h1>{location.state.text}</h1>
        </div>

        <section>

            <div className="aboutEvent">
                <h3>About the Event</h3>
            </div>

            <div className="row1">
                <div className="column1">
                    <p>{location.state.description}</p> <br></br>
                    <button className="btn btn-warning" onClick={()=>{alert("You have registered successfully. Event is on "+location.state.date )}}>Register</button>
                </div>

                <div className="column2">

                    <Carousel>

                      <CarouselItem className="serviceItem">                        
                      <img className="carouselbg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg-jS4hobnTNE39gXox9vSszXEO0y9RBCmHA&usqp=CAU">
                      </img>
                      <Carousel.Caption>
                        
                      </Carousel.Caption>

                      </CarouselItem>


                      <CarouselItem className="item">   
                      <img className="carouselbg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZDWnJMH7ISdH9Sve6WXnz9sOLWmmMPGZ2Q&usqp=CAU">
                      </img>                     

                      <Carousel.Caption>
                        
                      </Carousel.Caption>

                      </CarouselItem>

                    


                    </Carousel>
                </div>

            </div>

        </section>
      
      
      
      
        </div>

  );
}

export default ServiceContent;