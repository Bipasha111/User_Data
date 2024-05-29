
import React, { useState } from 'react'
import { axiosClient } from '../../utils/AxiosClient' 
import { Link } from 'react-router-dom'

const Singup = () => {

// const [name ,setName] = useState("")
const [email,setemail] = useState("")
const [password,setPassword] = useState("")

async function handleSubmit (e){
try {
  e.preventDefault();
  const result = await axiosClient.post('/auth/signup',{email,password});
  console.log(result);

  // setItem("accessToken ",result.result.accesToken)
  // removeItem("accessToken")

  
} catch (e) {
  console.log("erorro from axios in singUp page")
  
}
}

    return (
        <div className='login'>
         <div className='login-box'>
         <h2 className='heading'>Singup</h2>
    <form action="" onClick={handleSubmit}>
        
         {/* <label htmlFor="name">Name:</label>
           <input type="name"  id="name" placeholder='Enter the name' className='name' 
              //  onChange={(e)=>{setName(e.target.value)}}
           /> */}
           <label htmlFor="email">Email:</label>

           <input type="email"  id="email" placeholder='Enter the email' className='email'
            onChange={(e)=>{setemail(e.target.value)}}
           />
    
           <label htmlFor="password">Password:</label>
           <input type="password"  id="password" placeholder='Enter the password' className='email'
               onChange={(e)=>{setPassword(e.target.value)}}
           />
    
           <input type="submit" name="submit" id="" className='submit' />
           <p className='sunheading'>   Already have an account? <Link to="/login"> Login </Link>   </p>
        </form> 
            </div>     
        </div>
      )
}

export default Singup
