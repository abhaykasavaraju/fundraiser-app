import React, { Component } from 'react'
import frdata from '../fundraisers-data';
import Modal from 'react-bootstrap/Modal'


export class AddForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            show : false,
            name: '',
            objective :'',
            description: '',
            goalAmount:0,
            collectedAmount:0,
            UPI:'',
            phoneNumber:'',
            email:'',
            fundraiser: this.props.fundraiser
        }
        this.handleSubmit= this.handleSubmit.bind(this)
        this.handleChangeName= this.handleChangeName.bind(this)
        this.handleChangeDesc=this.handleChangeDesc.bind(this)
        this.handleChangeGoalAmount=this.handleChangeGoalAmount.bind(this)
        this.handleChangeObjective=this.handleChangeObjective.bind(this)
        this.handleChangeCollectedAmount=this.handleChangeCollectedAmount.bind(this)
        this.handleChangeUPI=this.handleChangeUPI.bind(this)
        this.handleChangePhoneNumber=this.handleChangePhoneNumber.bind(this)
        this.handleChangeEmail=this.handleChangeEmail.bind(this)
    }
     handleChangeName(event) {
        this.setState({name: event.target.value});
        console.log(event)  
     }
     handleChangeObjective(event){
        this.setState({objective: event.target.value});
    }
    handleChangeDesc(event){this.setState({description: event.target.value});}
    handleChangeGoalAmount(event){this.setState({goalAmount: event.target.value});}
    handleChangeCollectedAmount(event){this.setState({collectedAmount: event.target.value});}
    handleChangePhoneNumber(event){this.setState({phoneNumber:event.target.value})};
    handleChangeEmail(event){this.setState({email:event.target.value})};
    handleChangeUPI(event){this.setState({UPI:event.target.value})};
    

    
    handleSubmit(event) {
        
        this.state.fundraiser.push({
            heading: this.state.objective,
            description: this.state.description,
            collectedAmount : this.state.collectedAmount,
            goalAmount : this.state.goalAmount,
            postedBy: this.state.name,
            UPI : this.state.UPI,
            phoneNumber : this.state.phoneNumber,
            email: this.state.email,
            isSelected : false,
            showDetails: false
        })
        console.log(this.state.fundraiser)
        this.props.parentCallback(this.state.fundraiser);
    }

    handleShow = () => {this.setState({show:true})}
    handleClose = () => {this.setState({show:false})}


    render() {
        return (

            <>
            <button className="btn btn-warning" onClick={this.handleShow} >Add Fundraiser</button> 
            
              <Modal show={this.state.show}>
                <Modal.Header>Specify Details</Modal.Header>
                 <Modal.Body>
                    <div>
                        <label>Name</label><br></br>
                        <input type="text" onChange={this.handleChangeName} value={this.state.name} placeholder="Name"></input> <br></br>
                        <label>Objective</label><br></br>
                        <input type="text"  onChange={this.handleChangeObjective} value={this.state.objective} placeholder="Objective"></input><br></br>
                        <label>Description</label><br></br>
                        <textarea onChange={this.handleChangeDesc} value={this.state.description} placeholder="Description"></textarea><br></br>
                        <label>Enter Goal Amount </label><br></br>
                        <input type="number" onChange={this.handleChangeGoalAmount} value={this.state.goalAmount} placeholder="Goal Amount"type="text"></input><br></br>
                        <label>Enter Collected Amount </label><br></br>
                        <input type="number" value={this.state.collectedAmount} onChange={this.handleChangeCollectedAmount} placeholder="Collected Amount"type="text"></input><br></br>
                        <label>Enter Phone number </label><br></br>
                        <input value={this.state.phoneNumber} onChange={this.handleChangePhoneNumber} placeholder="Phone Number"type="text"></input><br></br>
                        <label>Enter UPI ID </label><br></br>
                        <input value={this.state.UPI} onChange={this.handleChangeUPI} placeholder="UPI" type="text"></input><br></br>
                        <label>Enter Email </label><br></br>
                        <input value={this.state.email} onChange={this.handleChangeEmail} placeholder="Email" type="text"></input><br></br>

                        </div>
                  
                 </Modal.Body>
                 <Modal.Footer>
                    <button type="submit" onClick={this.handleSubmit} class="btn btn-primary">Submit</button>
                    <button class="btn btn-danger" onClick={this.handleClose}>Close</button>
                 </Modal.Footer>
              </Modal>
      
              </>
           
        )
    }
}

export default AddForm
