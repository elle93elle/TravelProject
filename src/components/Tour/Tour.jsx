import React, {useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import {AppContext} from "../../App";
import './Tour.css';
import MyDarkButton from "../../UI/buttons/MyDarkButton";

const Tour = () => {
    const {id} =useParams();
    const {tours} = useContext(AppContext);
    const currentTour = tours.find ((item) => item.id === Number(id));

    if (!currentTour) {
        return (
            <div>
            <h1>Not found</h1>
            <Link to='/tours'><button className='myBtn'>Back to tours</button></Link>
            </div>
        )
    }

    const {image,title,description, duration, price} = currentTour

    return (
        <div className='tour'>
            <img className='tour__background' src={image}/>
            <h2 className='tour__title'>{title}</h2>
            <div className='tour__inner'>
                <h3>Tour information</h3>
            <p className='tour__description'>{description}</p>
             <span>The tour lasts for: {duration} days</span>
            <span>Price: {price}$</span>
           <Link to={`/order/${id}`}><MyDarkButton>BOOK NOW</MyDarkButton></Link>
            </div>
</div>
    );
};

export default Tour;