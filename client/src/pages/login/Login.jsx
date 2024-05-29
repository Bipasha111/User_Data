
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { axiosClient } from '../../utils/AxiosClient' 
import "./Login.scss"
import { setItem } from '../../utils/LocalStrorage'
// import { removeItem} from '../../utils/LocalStrorage'

const Login = () => {

const navigate =useNavigate()
const [email,setemail] = useState("")
const [password,setPassword] = useState("")

async function handleSubmit (e){
try {
  e.preventDefault();
  const result = await axiosClient.post('/auth/login',{email,password});
  console.log(result,result.result);

  
  setItem("Key_AccessToken ",result.result.accesToken)
  navigate('/')
  // removeItem("accessToken")

  
} catch (e) {
  console.log("erorro from axios")
  
}

}

  return (
    <div className='login'>
     <div className='login-box'>
     <h2 className='heading'>Login</h2>


<form action="" onClick={handleSubmit}>
       <label htmlFor="email">Email:</label>
       <input type="email"  id="email" placeholder='Enter the email' className='email' 
        onChange={(e)=>{setemail(e.target.value)}} />

       <label htmlFor="password">Password:</label>
       <input type="password"  id="password" placeholder='Enter the password' className='password'
       onChange={(e)=>{setPassword(e.target.value)}}  />

       <input type="submit" name="submit" id="" className='submit' />
       <p className='sunheading'>   Do not have an account? <Link to="/singup"> Sign Up </Link>   </p>
    </form> 
        </div>     
    </div>
  )
}

export default Login
