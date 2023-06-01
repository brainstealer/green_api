import React from 'react';
import './mainPage.css'
import Menu from './menuBar/Menu';
import Chat from './chat/Chat';

const MainPage = () => {
    return (
        <div className='mainPage_container'>
            <Menu/>
            <Chat/>
            
        </div>
    )
}

export default MainPage;