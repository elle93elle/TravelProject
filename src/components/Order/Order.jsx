import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import FormCard from "../../UI/FormCard/FormCard";
import './Order.css'
import MyButton from "../../UI/buttons/MyButton";
import MyInput from "../../UI/Input/MyInput";

const Order = () => {
    let navigate = useNavigate()
    const {id} = useParams()

    const [phone, setPhone] = useState('+7');
    const [name, setName] = useState('');


    function submitOrder(e) {
        e.preventDefault();

        const order = {
            name: name,
            phone: phone,
            id: id
        }
        const prevOrders = JSON.parse(localStorage.getItem('orders'))
        const newOrders = [...prevOrders, order ]
        localStorage.setItem('orders', JSON.stringify(newOrders))

        alert('Your contacts received')
        setName('')
        setPhone('')

        return navigate('/tours')
    }

    return (
        <div className='order'>
            <FormCard>
                <form onSubmit={submitOrder}>
                    <h1 style={{textAlign:'center'}}>Your contact information</h1>
                    <MyInput
                        required
                        type="text"
                        placeholder='+7 999 999 99 99'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}/>
                    <MyInput
                        required
                        type="text"
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <MyButton type='submit'>Submit</MyButton>
                </form>
            </FormCard>
        </div>
    );
};

export default Order;