import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import './Navigation.css'
import {AppContext} from "../../App";
import MyButton from "../../UI/buttons/MyButton";

const Navigation = () => {
    const {isAuth, setIsAuth} = useContext(AppContext)
    const navigate = useNavigate();

    return (
        <header>
            <nav className='navigation'>
                <Link to="/" className='navigation__logo'>
                    TRAVEL <i className="fas fa-compass" style={{color: 'white'}}></i>
                </Link>
                <ul className='navigation__links'>
                    <li>
                        <Link className='navigation__link' to='/'>MAIN</Link>
                    </li>
                    <li>
                        <Link className='navigation__link' to='/tours'>TOURS</Link>
                    </li>
                    <li>
                        <Link className='navigation__link' to='/search'>SEARCH</Link>
                    </li>
                    <li>
                        {isAuth &&  <Link className='navigation__link' to='/private'>PRIVATE</Link>}
                        {!isAuth && <Link className='navigation__link'
                                          style={{display:'none',}}
                                          to='/private'>PRIVATE</Link>}
                    </li>
                </ul>
                {!isAuth && <MyButton onClick={() => navigate('/private')}>SIGN IN</MyButton>}
                {isAuth && <MyButton onClick={() => setIsAuth(false)}>SIGN OUT</MyButton>}

            </nav>
        </header>
    );
};

export default Navigation;