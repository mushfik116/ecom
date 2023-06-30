 import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { selectloggedInUser } from './authSlice'
 
 const Protected = ({children}) => {

  const user =useSelector(selectloggedInUser)
  console.log(user)
// debugger]
//i had selectedloggedInUser= {} which makes it true so  made it null
if(!user){
  return <Navigate to={"/login"}></Navigate>
}
   return   children
      
   
 }
 
 export default Protected