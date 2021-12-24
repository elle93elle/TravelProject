import React, {useContext} from 'react';
import Card from "../components/Card/Card";
import {AppContext} from "../App";
import '../styles/Tours.css'


const Tours = () => {

    const {tours} = useContext(AppContext)


    if (!tours) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div className='tours'>
            <h2 className='tours__title'>DISCOVER OUR TOURS</h2>
            <div className='tours__list'>
                <div className='tours__cards'>
                    {tours.map((card) => {
                        return (
                            <Card key={card.id} card={card}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Tours;