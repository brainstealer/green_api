import axios from 'axios';



export default class ApiService {
    
    static async loginGreen(idInstance, apiTokenInstance) {
        const response = await axios.get(`https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}
        `)
        return response.data;
    }

    static async sendMessage(idInstance, apiTokenInstance, telNumber, messageText) {
        const response = await axios.post(`https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
            'chatId': `${telNumber}@c.us`,
            'message': messageText.toString()
        })
        return response.data;
    }

    static async recieveMessage(idInstance, apiTokenInstance) {
        const response = await axios.get(`https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}
        `)
        return response.data;
    }

    static async deleteNotification(idInstance, apiTokenInstance, receiptId) {
        const response = await axios.delete(`https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`)
        return response;
    }
}