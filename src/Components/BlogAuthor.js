import { UserContext } from "../Utils/UserContext";
import { useContext, useState } from "react";
import jwt_decode from "jwt-decode"; 
import axios from "axios";

function BlogAuthor(props){
    const { user } = useContext(UserContext);
 
  const token = localStorage.getItem("token")
 
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
    return(
        <div className="basis-1/4 bg-white rounded-md h-fit">
        <div className="bg-gray-900 rounded-t-md h-8"></div>
        <div className="px-5">
            <div className="flex items-end space-x-2">
            {checkUser.id===props.user._id  ? (
                <div className="h-12 w-12">               
                    <img className="rounded-full" src=  {image}           />
                </div> ):(
                <div className="h-12 w-12">               
                    <img className="rounded-full" src=  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                    />
                </div> )}
                <h4 className="font-bold text-xl"> {props.user.firstName}</h4>
            </div>
          <p className="py-3"> {props.user.bio} </p>
            <div className="py-2 space-y-1.5">
                <div>
                    <h3 className="font-bold text-gray-500">location</h3>
                    <h3>{props.user.location}</h3>
                </div>
                <div>
                    <h3 className="font-bold text-gray-500"> Work </h3>
                    <h3> {props.user.work}</h3>
                </div>
                <div>
                    <h3 className="font-bold text-gray-500">Joined</h3>
                    <h3>3rd Jan 23</h3>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BlogAuthor