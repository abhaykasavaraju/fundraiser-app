import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CardData from './CardData';
import CardData1 from './CardData1';

function Cards() {

  return (
    <div className='cards'>
      
      <div className="section-title--style-1">
        <h2>Upcoming Events</h2>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {CardData.map((item,index)=>(
            <CardItem src={item.src} text={item.text} label={item.label} path={item.path} description={item.description} img={item.img} date={item.date}/>
          ))}
          </ul>
          
          <ul className='cards__items'>
          {CardData1.map((item,index)=>(
            <CardItem src={item.src} text={item.text} label={item.label} path={item.path} description={item.description} img={item.img} date={item.date}/>
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;