import axios from 'axios'


const host = "http://localhost:5000/api";

// create new submission
export const addSubmission = async(params) =>{
    console.log("Submittion save params", params)
    try{
        // let res = await axios.post(`${host}/item`,{headers: authHeader()})
        let res = await axios.post(host+ "/submission",params)

        return res.data
    }catch(e){
        console.log("error found :", e.message)
    }
}

// get all submissions
export const getAllSubmissions = async() => {
    try{
    const res = await axios.get(`${host}/submission`);
    return res.data
    }
    catch(e){
        console.log(e)
    }
} 

// get single assignment
export const viewSingleSubmission = async(id)=>{
    try{
        let res = await axios.get(`${host}/submission/${id}`)
        return res.data
    }catch(e){
        console.log("error found :", e.message)
    }
}