import React, { useContext } from 'react'
import MainPage from '../UI/pages/MainPage/MainPage';
import LoginPage from '../UI/pages/Login/Login';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/context';

const Router = () => {
    const {isAuth} = useContext(AuthContext);
    return (isAuth 
            ?
            <Routes>
                <Route path='/main' element={<MainPage/>}/>
                <Route path='*' element={<Navigate to='/main' reaplce/>}/>

            </Routes>
            :
            <Routes>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='*' element={<Navigate to='/login' reaplce/>}/>
            </Routes>
    )
}

export default Router