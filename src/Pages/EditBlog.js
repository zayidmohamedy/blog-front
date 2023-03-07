import axios from "axios";
import { useState } from "react"
import { Navigate, useLocation, useNavigate } from "react-router-dom";
 
import { toast } from "react-toastify";
 

function EditBlog(){
 const location = useLocation()
    const id =location.state.blog
      
    const [inputs,setInputs]= useState({})
    const Navigate= useNavigate();
    function handleOnSubmit(){
        const token = localStorage.getItem("token")
        axios.put(`http://localhost:8000/blog/edit/${id}`,inputs , {headers:{Authorization:token}})
        .then((res)=>{
         
            toast.success("your blog is updated");
             Navigate("/dashboard")
            }).catch((e)=>{ 
                toast.error("oops we have error!");
              
                })
    }
    return(
        <div className="m-auto w-1/2 mt-5 p-5 bg-white rounded-md">
            <h2 className="mb-8 text-center font-bold text-2xl">Blog post</h2>
            <input type="file"/>
            <div className="my-2">
                <input className="text-4xl font-bold w-full" type="text" placeholder="New post title here..." 
                onChange={ (e)=>setInputs({...inputs,title:e.target.value})} 
                />
            </div>
            <div className="border border-gray-100 my-3"></div>
           
            <textarea className="border w-full rounded-md p-2 my-2" rows="10" placeholder="Blog content" 
            onChange={ (e)=>setInputs({...inputs,content:e.target.value})}
            ></textarea>
            <div className="flex justify-end ">
                 <button className="px-6 py-2 bg-blue-500 text-white rounded-md"  onClick={handleOnSubmit} >Post</button>
            </div>
        </div>
    )
}

export default EditBlog