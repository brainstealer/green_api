import React, { useContext, useState } from 'react';
import './login.css';
import axios from "axios";
import { AuthContext } from '../../../../context/context';
import ApiService from '../../../../API/ApiService';

const LoginPage = () => {

    // const [idInstance, setIdInstance] = useState('');
    // const [apiTokenInstance, setApiTokenInstance] = useState('');
    const {isAuth, setIsAuth, idInstance, setIdInstance, apiTokenInstance, setApiTokenInstance} = useContext(AuthContext);


    async function fetchLogin(event) {
        event.preventDefault();
        const response = await ApiService.loginGreen(idInstance, apiTokenInstance)
        
        if (response.stateInstance === 'authorized') {

            setIsAuth(true);
            localStorage.setItem('auth', 'true')
        } else {
            console.log('неверный логин или пароль');
        }
}

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div className='app'>
            <div className='container'>
                <form onSubmit={login} className='login_box'>
                    <h2>Login</h2>
                    <input 
                        value={idInstance}
                        className='' 
                        type="text" 
                        placeholder='ID Instance'
                        onChange={e => setIdInstance(e.target.value)}
                    />
                    <input 
                        value={apiTokenInstance}
                        type="password" 
                        placeholder='API Token'
                        onChange={e => setApiTokenInstance(e.target.value)}
                        />
                    <button onClick={fetchLogin}>Войти</button>
                </form>
            </div>
            

        </div>
    )
}

export default LoginPage;