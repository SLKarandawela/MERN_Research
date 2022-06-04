import axios from 'axios'
import authHeader from '../authentication/auth.headers';


const host = "http://localhost:5000/api/chat";
const mHost = "http://localhost:5000/api/messages";
const aHost = "http://localhost:5000/api/auth";


// get all chats
export const getAllConversations = async() => {
    try{
        const res = await axios.get(`${host}`,{headers: authHeader()});
        // console.log("conversation List", res)
    return res.data
    }
    catch(e){
        console.log(e)
    }
} 

// get chats related to chat id
export const getChat = async (chatId) => {
    console.log("Backend chat Id", chatId)
    try{
        let res = await axios.get(`${mHost}/${chatId}`,{headers: authHeader()})
        return res.data
    }catch(e){
        console.log("error found :", e.message)
    }

   
};
  
// create a new message
export const createMessage = async(params) =>{
    console.log("Submittion save params", params)
    try{
        // let res = await axios.post(`${host}/item`,{headers: authHeader()})
        let res = await axios.post(`${mHost}`,params,{headers: authHeader()})

        return res.data
    }catch(e){
        console.log("error found :", e.message)
    }
}

// create new chat

export const createChat = async(params) =>{
    console.log("Submittion save params", params)
    try{
        // let res = await axios.post(`${host}/item`,{headers: authHeader()})
        let res = await axios.post(`${host}`,params,{headers: authHeader()})

        return res.data
    }catch(e){
        console.log("error found :", e.message)
    }
}


// get all users
export const getAllUsers = async() => {
    try{
        const res = await axios.get(`${aHost}/studentUsers`,{headers: authHeader()});
        console.log("Users List", res)
    return res.data
    }
    catch(e){
        console.log(e)
    }
} 




// create new group chat