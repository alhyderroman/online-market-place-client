import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure=axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    withCredentials:true,


})
axios.get
const useAxiosSecure = () => {
    const {logOut}=useAuth();
    const navigate=useNavigate();
    //interceptor
    //response interceptor
    axiosSecure.interceptors.response.use(res=>{
        console.log('response app e ashar agei ami thamiye dekheci ki ahce er vitor');
        return res
    }),
   async error=>{
        console.log('Error from axios interceptor',error.response);
        if(error.response.status===401||error.response.status===403){
           await logOut();
            navigate('/login');
        }
        return Promise.reject(error)
    }
        
    


    //request interceptor
    axios.interceptors.request               

    return axiosSecure;
};

export default useAxiosSecure;