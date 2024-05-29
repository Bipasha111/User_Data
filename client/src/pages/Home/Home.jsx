
// import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

import { axiosClient } from '../../utils/AxiosClient'

const Home = () => {


  async function fetchData(){
    const r =await axiosClient.get('/post/All');
    console.log("hiiii")
    
    console.log("got the response",r)
  }

  // useEffect(() => {
  //      fetchData()    
  // }, [])
  

  return (
    <div>
      <h1>home</h1>
    <center>
    <h2><Link to="/singup">SingUp</Link></h2>
      <h2><Link to="/login">Login</Link></h2>
    </center>

    <button onClick={()=>{fetchData()}}> click</button>
    
    </div>
  )
}

export default Home



// import React, { useEffect, useState } from 'react';
// import { axiosClient } from '../../utils/AxiosClient';

// const Home = () => {
//   const [error, setError] = useState(null);

//   // useEffect(() => {
//   //   fetchData();
//   // }, []);

//   async function fetchData() {
//     const response = await axiosClient.get('/post/All');
   
//   }

//   return (
//     <div>
//       <h1>Home</h1>
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}
//       {/* <center>
//         <h2><Link to="/signup">SignUp</Link></h2>
//         <h2><Link to="/login">Login</Link></h2>
//       </center> */}
//     </div>
//   );
// };

// export default Home;

