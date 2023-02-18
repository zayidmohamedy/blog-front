import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "./Utils/UserContext"

function ProtectRoutes({children}){
 const {user}= useContext(UserContext)

 if (user === false){
    // direct to login 
    return <Navigate to="/login"/>
 }  
    return children
 

}


export default ProtectRoutes