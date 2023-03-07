import {FaRegComment} from "react-icons/fa"
import {Link} from "react-router-dom"

import { UserContext } from "../Utils/UserContext";
import { useContext, useState } from "react";
// import jwt_decode from "jwt-decode"; 
// import axios from "axios";

function BlogCard(props){
    const { user } = useContext(UserContext);
 
// const token = localStorage.getItem("token")
       
//     const [image,setImage] = useState({});
   
    // const checkUser = jwt_decode(token)
    //   if(user){
    //     const id = jwt_decode(token)
    //     axios.get(`http://localhost:8000/auth/user/${id.id}`)
    //     .then((res)=>{
         
    //       if(res.data.user.image){
    //         setImage(res.data.user.image.url);
    //       }
          
         
    //         }).catch((e)=>{ 
    //              console.log(e);
    //         })
    //   }
    return (
    <Link to={`/blog/${props.data._id}`}>
    <div className="bg-white border rounded-md mb-4">
        <div>
            <img className="rounded-t-md" src="https://appmaster.io/api/_files/PqV7MuNwv89GrZvBd4LNNK/download/"/>
        
        
        </div>
        <div className="flex space-x-3 p-6">
            <div className="h-12 w-12">

            <img className="rounded-full" src=  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                    />
            {/* {checkUser.id===props.data.user._id  ? (
                            
                    <img className="rounded-full" src=  {image}           />
                ):(
                          
                    <img className="rounded-full" src=  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                    />
                  )} */}
              
            </div>
            <div className="space-y-1.5">
                <div className="leading-4">
                    <h4>Mohamed ahmed</h4>
                    <small className="text-gray-400">Jan 12</small>
                </div>
                <div >
                    <h3 className="font-bold text-2xl hover:text-sky-600">{props.data.title}</h3>
                </div>
                <div className="flex items-center space-x-1.5">
                    <FaRegComment size={15} className="text-gray-700"/>
                    <small className="text-gray-700">3 Comments</small>
                </div>
            </div>
        </div>
    </div>
    </Link>

    )
}

export default BlogCard