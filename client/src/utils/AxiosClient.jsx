
import axios from "axios";
import {setItem,getItem} from "./LocalStrorage";
// import {key_Access_Token} from "./LocalStrorage"

export const axiosClient =  axios.create({
    baseURL:"http://localhost:8000",
    withCredentials:true
});

axiosClient.interceptors.request.use(
    (config)=>{
    
    // console.log("key_Access_Token===="+key_Access_Token)
    // const accessToken = getItem(key_Access_Token);
    // console.log("accessTokent hai "+ accessToken)
    // config.headers['Authorization'] =`Bearer ${accessToken}`;

    const accessToken = getItem("accessToken")
    config.headers['Authorization'] =`Bearer ${accessToken}`;
   
    return config; 
}
,
(error)=> {
    console.log(error)
    return Promise.reject(error);
})



axiosClient.interceptors.response.use(
 async(response)=>{
    console.log(response)
        const data = response.data
        if(data.status==='ok')
            {return data;}


        const originalRequest = response.config;
      
        const statusCode = data.statusCode;
        const error = data.error;

        
        if(statusCode===401 && originalRequest.url==='http://localhost:8000/auth/refresh')
            {  
                //    removeItem(key_Access_Token)
                   window.location.replace('/login','_self')
                   return Promise.reject(error);
          }
 
        if(statusCode===401){
         
            const refrshToken = await axiosClient.get('/auth/refresh');
            console.log("response from bakend",refrshToken)
            console.log("accessToken", refrshToken.result.accessToken)
            
            
          
            if(refrshToken.status=== 'ok'){
                console.log("ok hai ki nhi")
            //     // setItem(key_Access_Token,)


                setItem("accessToken",refrshToken.result.accessToken)
                
                originalRequest.headers['Authorization'] = `Bearer ${refrshToken.result.accessToken}`;
                
                console.log("hiii sab thik ab tk ");
                return axios(originalRequest)
            }
        }
                   
            }
)
