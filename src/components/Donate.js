import React, { Component } from 'react'
import "./Donate.css"
export class Donate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="donate-details">
                {console.log(this.props.details)}
                <p className="donate-item">UPI ID : {this.props.details.UPI}</p>
                <p className="donate-item">Email id : {this.props.details.email}</p>
                <p className="donate-item">Phone Number : {this.props.details.phoneNumber}</p>
            </div>
            
            
            // <div className="donate-details">
            //   <div className="detail">
            //     <p>{props.details.UPI}</p>
            //     <p>{props.details.phoneNumber}</p>
            //     <p>{props.details.email}</p>
            //   </div>
            // </div>
        )
    }
}

export default Donate
