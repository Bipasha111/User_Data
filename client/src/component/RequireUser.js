import React from 'react'
import { getItem } from '../utils/LocalStrorage'
import { Navigate, Outlet } from 'react-router-dom'

const RequireUser = () => {
    
    // const user = getItem("Key_AccessToken")
    // console.log("user",user)
    const  user ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjUxNjUwMzYxZWIyOGYyMTQwM2Q1NDEiLCJlbWFpbCI6InJpdGFAZ21haWwuY29tIiwiaWF0IjoxNzE2NjM0NTI4LCJleHAiOjE3MTY2MzQ1NDh9.xcP1PDPIZKq8SDVshtwjoMmfxwEjJPuJYkAiqoITyes"
    
    
  return (
    user?<Outlet/>:<Navigate to="/login"/>
  )
}

export default RequireUser
