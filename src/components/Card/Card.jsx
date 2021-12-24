import React from 'react';
import './Card.css'
import {Link} from "react-router-dom";
import MyDarkButton from "../../UI/buttons/MyDarkButton";


const Card = ({card}) => {
    const {title, description, image, id} = card;

    return (
        <div className='card tours__card'>
            <div className='card__image'>
            <img src={image} alt={title} />
            </div>
            <h2 className='card__title'>{title}</h2>
            <p className='card__description'>{description}</p>
            <Link to={`/tour/${id}`} className='card__button'>
                <MyDarkButton >Find out more</MyDarkButton>
            </Link>
        </div>
    );
};

export default Card;