import React, {useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import './Tour.css';
import MyDarkButton from "../../UI/buttons/MyDarkButton";
import {AppContext} from "../../App";


const Tour = () => {
    // const [tour, setTour] = useState()
    // useEffect(() => {
    //     getTour(id).then((res) => setTour(res))
    // }, [])

    const {tours}=useContext(AppContext)
    let {id} = useParams();
    const currentTour = tours.find((item)=>{return item.id === Number(id)})

    if (!currentTour) {
        return (
            <div>
                <h1>Not found</h1>
                <Link to='/tours'>
                    <MyDarkButton>Back to tours</MyDarkButton>
                </Link>
            </div>
        )
    }

    const {image, title, description, duration, price} = currentTour

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