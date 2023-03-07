import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { UserContext } from "../Utils/UserContext"
import Comment from "./Comment"
 
import jwt_decode from "jwt-decode"; 

function BlogComments(){
    const {id} = useParams()
    const {user}=useContext(UserContext)
    const [comment,setComment]=useState("")
    const [comments,setComments]=useState([])
    const token =  localStorage.getItem("token")
  

       
const [image,setImage] = useState({});


  if(user){
    const token = localStorage.getItem("token")
    const id = jwt_decode(token)
    axios.get(`http://localhost:8000/auth/user/${id.id}`)
    .then((res)=>{
     
     
      setImage(res.data.user.image.url);
    
        }).catch((e)=>{ 
             console.log(e);
        })
  }
   useEffect(()=>{
    axios.get(`http://localhost:8000/comment/list/${id}`)
    .then((res)=>{
          setComments(res.data.comments);
    }).catch((e)=>{
        console.log(e);
    })

   },[])
    function handleOnSubmit(){
        axios.post("http://localhost:8000/comment/create",{
            comment:comment,
            blog:id
        },{
            headers:{
                authorization:token
            }
        })
        .then((res)=>{

           toast.success(res.data.message);
          
            }).catch((e)=>{ console.log(e.response.data.message);})
    }
 
    return (
        <div className="border-t py-5 px-16">
            <h1 className="font-bold text-2xl">Top comment(s)</h1>
            {user &&
            <div className="py-5">
                <div className="flex space-x-2">
                <div className="h-12 w-12">               
                     <img className="rounded-full" src= {image}
                                          />
                </div>
                    <textarea className="border w-full rounded-md p-2" placeholder="Add to the discussion" onChange={(e)=> setComment(e.target.value)}></textarea>
                </div>
                <div className="flex justify-end">
                    <button className="bg-blue-600 p-2" onClick={handleOnSubmit}>Submit</button>
                </div>
            </div>  }
            {comments.map((data)=> <Comment comments={data}/>)}
        </div>
    )
}

export default BlogComments