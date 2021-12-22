import React, {useContext, useEffect, useState} from 'react';
import {users} from "../database/users";
import {AppContext} from "../App";
import MyInput from "../UI/Input/MyInput";
import FormCard from "../UI/FormCard/FormCard";
import MyButton from "../UI/buttons/MyButton";
import '../styles/Private.css'

const Private = () => {
    const {isAuth, setIsAuth, tours} = useContext(AppContext)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const getOrders = JSON.parse(localStorage.getItem('orders'))
        setOrders(getOrders)

    }, [])

    function submitUser (e) {
        e.preventDefault();
        const currentUser = users.find((item) => item.login === login )
        if(!currentUser) {
            return alert('No such user')
        }

        if(currentUser.password !== password) {
            return alert('Password is not correct')
        }

        alert('You are logged')
        setPassword('')
        setLogin('')
        setIsAuth (true)
    }


    if(!isAuth) {
        return (
            <div className='private'>
            <FormCard>
                <form onSubmit={submitUser}>
                    <h1>Enter your login and password</h1>
                    <MyInput
                        required
                        type="text"
                        placeholder='login'
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}/>
                    <MyInput
                        required
                        type="password"
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <MyButton type='submit'>LOG IN</MyButton>
                </form>
            </FormCard>
        </div>
        )
    }

    if(!orders.length) {
        return (
            <h3 className='tours__title'>No orders</h3>
        )
    }


    return (

        <div>
            {orders.map((order) => {
                return (
                    <div>
                        <h3>{order.name}</h3>
                        <p>{order.phone}</p>
                        <span>{order.id}</span>
                    </div>
                )
            })}
        </div>
    )
};

export default Private;