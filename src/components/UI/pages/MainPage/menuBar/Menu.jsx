import React, { useContext, useState } from 'react';

import MyButton from '../../../buttons/MyButton';
import { AuthContext } from '../../../../../context/context';
import './menu.css'

const Menu = () => {
    const {setIsAuth} = useContext(AuthContext);

    const {telNumber, setTelNumber, setApiTokenInstance, setIdInstance} = useContext(AuthContext);
    const logOut = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
        setTelNumber('');
        setIdInstance('');
        setApiTokenInstance('');
    }


    return (
        <div className='menu'>
            <div>
                <input 
                    placeholder='70123456789'
                    value={telNumber}
                    className='' 
                    type="text"
                    onChange={e => setTelNumber(e.target.value)}      
                />
                <MyButton onClick={logOut}>Выйти</MyButton>
            </div>

            
        </div>
        )
}

export default Menu