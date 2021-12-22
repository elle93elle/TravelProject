import React from 'react';
import classes from './MyDarkButton.module.css'

const MyDarkButton = (props) => {
    return (
        <button className={classes.myDarkButton} >
            {props.children}
        </button>
    );
};

export default MyDarkButton;