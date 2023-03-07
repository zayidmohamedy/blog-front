 
import {MdOutlineDelete} from "react-icons/md"
import jwt_decode from "jwt-decode"; 
import { useCallback, useState } from 'react';
import { toast } from "react-toastify";
import axios from "axios";
 
function Comment(props){
   const  id= props.comments._id
    const token = localStorage.getItem("token")
    const user = jwt_decode(token)
 
 
 
    const [image,setImage] = useState({});
    const checkUser = jwt_decode(token)
      
      if(user){
        const id = jwt_decode(token)
        axios.get(`http://localhost:8000/auth/user/${id.id}`)
        .then((res)=>{
        
         
        
          setImage(res.data.user.image.url);
  
      
            }).catch((e)=>{ 
                 console.log(e);
            })
      }
    const handleOnSubmit = useCallback(id => {

        axios.delete(`http://localhost:8000/comment/delete/${id}` )
        .then(()=>{
            
            toast.success("your comment is deleted");
             
            }).catch(()=>{ 
                toast.error("oops we have error!");
      
                })
      }, []);
    

    return (
        <div className="py-5">
          <div className="flex space-x-2">
                <div className="">               
                {checkUser.id===props.comments.user._id  ? (
                <div className="h-12 w-12">               
                    <img className="rounded-full" src=  {image}           />
                </div> ):(
                <div className="h-12 w-12">               
                    <img className="rounded-full" src=  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                    />
                </div> )}      </div>
                <div className="border w-full rounded-md p-3">
                    <div className="flex items-center space-x-1">
                        <h2> {props.comments.user.firstName}</h2>
                        <h2 className="text-gray-500">12 Jan</h2>
                    </div>
                    <p className="text-lg py-2">{props.comments.comment}</p>
              { user.id===props.comments.user._id &&  
                <div className="float-right -mt-10 -ml-20" >
                <MdOutlineDelete className="text-red-500  "  size={18}
                   onClick={()=> handleOnSubmit(id)}
                 />
                </div>
                } 
                </div> 
             
                </div>
            </div>
    )
}

export default Comment