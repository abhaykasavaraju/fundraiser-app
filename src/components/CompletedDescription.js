import React from 'react'
import { useLocation } from 'react-router'
import './CompletedDescription.css'
//import bg from './background.png'

function CompletedDescription() {

    const location =useLocation()
    console.log(location)
    return (
        <div>
            <h2><span className="badge bg-success">{location.state.heading}</span></h2>
            <div >
             <p className="descr">{location.state.description}</p>
             </div>
            <img className="descrimg" src={location.state.src}></img>
            <br></br>
            <br></br>
            <h1>Amount Raised <span className="badge bg-success">{location.state.goalAmount}</span></h1>
            
        </div>
    )
}

export default CompletedDescription
