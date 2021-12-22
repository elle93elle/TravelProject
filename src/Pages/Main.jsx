import React from 'react';
import {Link} from "react-router-dom";
import video from '../assets/video/travel.mp4'
import '../styles/Main.css'
import MyButton from "../UI/buttons/MyButton";
import FormCard from "../UI/FormCard/FormCard";

const Main = () => {

    return (
        <div className='main'>
            <div className="main__video">
                <video src={video} autoPlay loop muted/>
            </div>
            <h1 className='main__title'>THE WORLD IS WAITING</h1>
            <h2 className='main__title'>COME JOIN US</h2>
            <div className="main__desc-wrapper">
            <FormCard>
                <h3 className='main__desc-title'>Your travel journey starts here</h3>
                <Link to='/tours' style={{padding:'15px'}}><MyButton >SEE TOURS</MyButton></Link>
            </FormCard>
            </div>

        </div>
    );
};

export default Main;