import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../App";
import Card from "../components/Card/Card";
import MyInput from "../UI/Input/MyInput";
import '../styles/Search.css'


const Search = () => {

    const {tours} = useContext(AppContext)
    const [searchTour, setSearchTour] = useState(tours)
    const [value, setValue] = useState('')


    useEffect(() => {
            const res = tours.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()))
            setSearchTour(res)
        },
        [value]
    )

    return (
        <div className='search'>
            <h2 className='search__title'>What country do you want to visit?</h2>
            <MyInput
                type="text"
                placeholder='Search'
                value={value} onChange={(e) => setValue(e.target.value)}
                style={{
                    textAlign: 'center',
                    width: 'fit-content',
                    border: '1px solid #242424'
                }}
            />
            <div className='search__inner'>
                {(!searchTour.length) ?
                    <h3 className='search__title'>Sorry, we have no tours to {value} :(</h3> :

                    searchTour.map((tour) => {
                        return (
                            <Card key={tour.id} card={tour}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Search;