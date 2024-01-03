import axios from "axios";
import { addStudent } from "./index";


export const FetchData=()=>{
    return async(dispatch)=>{
        const fetchData=async()=>{
            const {
                data: { data },
              } =await axios.get(`http://localhost:8080/student`);
           console.log(data)
            return data;
        }
        try{
            const data=await fetchData()
            console.log(data)
            dispatch(addStudent(data));
          }catch(error){
             console.log(error)
          }  
    }
}