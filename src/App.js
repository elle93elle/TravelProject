import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Tours from "./Pages/Tours";
import Main from "./Pages/Main";
import Private from "./Pages/Private";
import Tour from "./components/Tour/Tour";
import {createContext, useEffect, useState} from "react";
import Order from "./components/Order/Order";
import Search from "./Pages/Search";
import {getTours} from "./api";

export const AppContext = createContext(null)

function App() {

    const [tours, setTours] = useState([])
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        getTours().then((res)=>  setTours(res))
        if (!localStorage.getItem('orders')) {
            localStorage.setItem('orders', JSON.stringify([]))
        }
    }, [])


    return (
        <AppContext.Provider value={{tours, setTours, isAuth, setIsAuth}}>
            <div className='App'>
                <Navigation/>
                <main>
                    <Routes>
                        <Route path='/' element={<Main/>}/>
                        <Route path='/tours' element={<Tours/>}/>
                        <Route path='/tour/:id' element={<Tour/>}/>
                        <Route path='/private' element={<Private/>}/>
                        <Route path='/search' element={<Search/>}/>
                        <Route path='/order/:id' element={<Order/>}/>
                        <Route path='*' element={<Navigate to='/'/>}/>
                    </Routes>
                </main>
            </div>
        </AppContext.Provider>
    );
}

export default App;
