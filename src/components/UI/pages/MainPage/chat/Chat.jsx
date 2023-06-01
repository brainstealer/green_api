import React, { useContext, useEffect, useState } from 'react'
import MyButton from '../../../buttons/MyButton';
import './chat.css'
import ApiService from '../../../../../API/ApiService';
import { AuthContext } from '../../../../../context/context';


const Chat = () => {

    const [messageText, setMessageText] = useState('')
    const {idInstance, apiTokenInstance, telNumber} = useContext(AuthContext)
    const [messageArray, setMessageArray] = useState([]);
    const [notificationId, setNotificationId] = useState(0);

    async function sendingMessage() {
        await ApiService.sendMessage(idInstance, apiTokenInstance, telNumber, messageText)
        setMessageArray([...messageArray, {id: Date.now(), text: messageText}])
        setMessageText('')
        
    }

    useEffect(() => {
        subscribe();
    }, []);
    const subscribe = async () => {
        try {
            const response = await ApiService.recieveMessage(idInstance, apiTokenInstance);
            if (response.receiptId) {
                setNotificationId(response.receiptId)
                setMessageArray(messageArray => [...messageArray, {
                    idMessage: response.body.idMessage,
                    text: response.body.messageData.textMessageData.textMessage,
                }]);
                await del(response.receiptId);
                subscribe();
            } else {
                subscribe();
            }
        } catch (error) {
            setTimeout(() => {
                subscribe()
            }, 3000)
        }
    }

    const del = async (receiptId) => {
        try {
            await ApiService.deleteNotification(idInstance, apiTokenInstance, receiptId);
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        
        <div className='chat_container'>
            <div className='chat_window'>
            {messageArray && 
                messageArray.map(message => 
                <div key={message.idMessage} className={message.idMessage?'chat_new_message' : 'chat_my_message'}>{message.text}</div>
                )
            }
            
            
            </div>
            <div className='chat_bar'>
                <input 
                    type="text"
                    value={messageText}
                    placeholder='Сообщение'
                    onChange={e => setMessageText(e.target.value)}    
                />
                <MyButton onClick={sendingMessage}>Отправить</MyButton>
            </div>
        </div>
        
    )

}

export default Chat;