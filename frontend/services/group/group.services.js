import axios from 'axios'
import authHeader from '../authentication/auth.headers';


const host = "http://localhost:5000/api/group";

// create new submission
export const createGroup = async(params) =>{
    console.log("Submittion save params", params)
    try{
        // let res = await axios.post(`${host}/item`,{headers: authHeader()})
        let res = await axios.post(host,params)

        return res.data
    }catch(e){
        console.log("error found :", e.message)
    }
}

// get all groups
export const getGroup = async (params) => {
    console.log("group params", params)
    try{
    const res = await axios.get(`${host}/groupByStudent`,params,{headers: authHeader()});
    return res.data
    }
    catch(e){
        console.log(e)
    }
}