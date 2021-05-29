import React from 'react'
import { Card } from 'react-bootstrap';
import './Job.css'
const Cards = (props) => {
    return (
     

        <>
        <div style = {{borderStyle:'solid',width:'65%',height:"600px",paddingLeft:'10px'}}>
           <h1>Position : {props.tittle}</h1>
           
            <h2>Summary :</h2>
            <p>{props.summary}</p>

            <img src={props.imageSource}></img>
            <br></br> <br></br> <br></br><br></br>
            <a href="https://www.amazon.jobs/en-gb/"><button className="btn btn-primary">Apply</button></a>

           
        </div>
        <br/>
        </>
    )
}

export default Cards
