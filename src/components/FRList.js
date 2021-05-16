import React, { Component } from 'react'
import frdata from '../fundraisers-data';
import AddForm from './AddForm';
import { SiFacebook, SiInstagram,SiLinkedin } from "react-icons/si";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import Donate from './Donate'
import ProgressBar from 'react-bootstrap/ProgressBar'
import './FRList.css'
import CompletedCarousel from './CompletedCarousel'
import Header from './Header'


export class FRList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fundraiser : frdata,
        }
             
    }

    handleCallback = (childData) => {
        this.setState({
            fundraiser : childData
        })
    }

    showModal = () => {
        this.setState({ show: true });
      };
    
    hideModal = () => {
        this.setState({ show: false });
      };
    onDonate =(index)=>{
      const temp=[...frdata]
      temp[index].isSelected=true
      this.setState({
        fundraiser:temp
      })
    };

    onClickCaratDown =(index) => {

      const temp=[...frdata]
      temp[index].showDetails =true;
      this.setState({
        fundraiser:temp
      })
    };

    onClickCaratUp =(index) => {

      const temp=[...frdata]
      temp[index].showDetails =false;
      this.setState({
        fundraiser:temp
      })
    };

    
    
    render() {
           return (
          <div className="main">
                <Header></Header>
                 {this.state.fundraiser.map((fr,index) => (
                  <div className="fr-list" key={index}>
                    <div className="row heading-row">

                      <div className="columnOne">
                        <h3 >{fr.heading}</h3>
                      </div>

                      <div className="columnTwo">
                        {fr.collectedAmount <=(0.25*fr.goalAmount) ? <ProgressBar variant="danger"  striped="true" label={fr.collectedAmount} max={fr.goalAmount} now={fr.collectedAmount} />:''}

                        {fr.collectedAmount >(0.25*fr.goalAmount) && fr.collectedAmount <=(0.75*fr.goalAmount) ? <ProgressBar variant="warning"  striped="true" label={fr.collectedAmount} max={fr.goalAmount} now={fr.collectedAmount} />:''}

                        {fr.collectedAmount >(0.75*fr.goalAmount) && fr.collectedAmount <= fr.goalAmount ? <ProgressBar variant="success"  striped="true" label={fr.collectedAmount} max={fr.goalAmount} now={fr.collectedAmount} />:''}
                      </div>


                      <div className="columnThree">
                        <h3> {!fr.showDetails ? <BsFillCaretDownFill onClick={()=>this.onClickCaratDown(index)}></BsFillCaretDownFill> 
                                      : <BsFillCaretUpFill onClick={()=>this.onClickCaratUp(index)}></BsFillCaretUpFill>} </h3>
                      </div>

                     
                  </div>
                  <br></br>
                    
                    
                    
                    
                    {fr.showDetails ?
                      <div> 
                      <p>{fr.description}</p>
                      <label> Collected Amount   <button className="btn btn-success"> {fr.collectedAmount}</button></label> <br></br>
                      <label> Goal Amount         <button  className="btn btn-danger"> {fr.goalAmount}</button> </label> <br></br>
                      {/* {fr.collectedAmount <=(0.25*fr.goalAmount) ? <ProgressBar variant="danger"  striped="true" label={fr.collectedAmount} max={fr.goalAmount} now={fr.collectedAmount} />:''}

                      {fr.collectedAmount >(0.25*fr.goalAmount) && fr.collectedAmount <=(0.75*fr.goalAmount) ? <ProgressBar variant="warning"  striped="true" label={fr.collectedAmount} max={fr.goalAmount} now={fr.collectedAmount} />:''}

                      {fr.collectedAmount >(0.75*fr.goalAmount) && fr.collectedAmount <= fr.goalAmount ? <ProgressBar variant="success"  striped="true" label={fr.collectedAmount} max={fr.goalAmount} now={fr.collectedAmount} />:''} */}
                      
                      <br></br>
                      <h6>Posted by {fr.postedBy}</h6>
                      <br></br>
                      <div className="donate-footer">
                        <button className="btn btn-primary rounded-0"  onClick={()=>this.onDonate(index)}>Donate</button> 
                          &nbsp; &nbsp; 
                        <a href="https://www.facebook.com"> <SiFacebook></SiFacebook></a>
                        &nbsp; &nbsp; 
                        <a href="https://www.instagram.com"> <SiInstagram></SiInstagram> </a>
                        &nbsp; &nbsp;
                        <a href="https://www.linkedin.com"> <SiLinkedin></SiLinkedin> </a><br></br>
                      <br></br>
                      {fr.isSelected ? <Donate details={fr}></Donate> :''}
                    </div>
                    </div> : ''
                    
                    }
                    
                    
                </div>))}
              
                
                <AddForm
                parentCallback = {this.handleCallback} 
                fundraiser={this.state.fundraiser}
                show={this.state.show} 
                ></AddForm>
              <br></br>
              <br></br>
              <hr></hr>
              <div>
                <h2><span className="badge badge-primary">Completed Fundraisers</span></h2>
                <CompletedCarousel></CompletedCarousel>
              </div>
                
          </div>
        );
    
    }
}

export default FRList
