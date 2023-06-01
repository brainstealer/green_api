import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Router from './components/router/Router';
import { AuthContext } from './context/context';
import { useEffect, useState } from 'react';

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [idInstance, setIdInstance] = useState('');
    const [apiTokenInstance, setApiTokenInstance] = useState('');
    const [telNumber, setTelNumber] = useState('');


    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    }, [])
    
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            idInstance,
            setIdInstance,
            apiTokenInstance,
            setApiTokenInstance,
            telNumber,
            setTelNumber
        }}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </AuthContext.Provider>


    );
}

export default App;
