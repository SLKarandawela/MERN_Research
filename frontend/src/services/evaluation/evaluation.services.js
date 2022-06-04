import axios from 'axios'


const host = "http://localhost:5000/api/evaluation";

// create new submission
export const addEvaluation = async(params) =>{
    console.log("Submittion save params", params)
    try{
        // let res = await axios.post(`${host}/item`,{headers: authHeader()})
        let res = await axios.post(host+ "/addevaluation",params)

        return res.data
    }catch(e){
        console.log("error found :", e.message)
    }
}

// get all submissions
export const getAllEvaluations = async() => {
    try{
    const res = await axios.get(`${host}/viewevaluations`);
    return res.data
    }
    catch(e){
        console.log(e)
    }
} 

// get single assignment
export const viewSingleEvaluation = async(id)=>{
    try{
        let res = await axios.get(`${host}/viewevaluations/${id}`)
        return res.data
    }catch(e){
        console.log("error found :", e.message)
    }
}