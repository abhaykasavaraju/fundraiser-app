import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios from 'axios'
import { Component } from 'react'

export class Cards extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      CardData : [],
      CardData1:[],
      CardData2:[]
    }
         
}
  
  componentDidMount() {
    axios.get('http://localhost:5000/events')
    .then(response => {
      this.setState({ CardData: response.data })
    })
    .catch((error) => {
      console.log(error);
    })
    // this.setState({CardData1:this.state.CardData.slice(0,3)})
    // this.setState({CardData2:this.state.CardData.slice(3,)})
    // console.log(this.state.CardData1)
  }
  
  render() {
    this.state.CardData1=this.state.CardData.slice(0,3);
    this.state.CardData2=this.state.CardData.slice(3,);
    return (
      
      <div className='cards'>
      {
        console.log(this.state.CardData[1])
        
      }
      <div className="section-title--style-1">
        <h2>Upcoming Events</h2>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {this.state.CardData1.map((item,index)=>(
            <CardItem src={item.src} text={item.text} label={item.label} path={item.path} description={item.description} img={item.img} date={item.date}/>
          ))}
          </ul>
          
          <ul className='cards__items'>
          {this.state.CardData2.map((item,index)=>(
            <CardItem src={item.src} text={item.text} label={item.label} path={item.path} description={item.description} img={item.img} date={item.date}/>
          ))}
          </ul>
        </div>
      </div>
    </div>
    )
  }
}

export default Cards
