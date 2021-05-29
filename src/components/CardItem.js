import React from 'react';
import { Link } from 'react-router-dom';
import { BsCalendarFill } from "react-icons/bs";
function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={{pathname:props.path,
                                                 state:{text:props.text,description:props.description,img:props.img,date:props.date}}}   >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img className='cards__item__img' alt='Nope' src={props.src}/>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <BsCalendarFill/> <span>{props.date}</span>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;