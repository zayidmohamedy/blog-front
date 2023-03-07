import axios from "axios"
import { useEffect, useState } from "react"
import {CiEdit} from "react-icons/ci"
import {MdOutlineDelete} from "react-icons/md"
import { Navigate, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { useCallback } from 'react';
function BlogList(){
  const Navigate= useNavigate();
   const [blogs,setBlogs]= useState([])
    const token= localStorage.getItem("token")

    const handleOnSubmit = useCallback(blog => {
      const id = blog._id
      axios.delete(`http://localhost:8000/blog/delete/${id}` )
      .then(()=>{
          
          toast.success("your blog is deleted");
           
          }).catch(()=>{ 
              toast.error("oops we have error!");
    
              })
    }, []);
  

     useEffect(()=>{
     axios.get(`http://localhost:8000/blog/my`,{headers:{
       authorization:token
     }}).then((res)=>{
      setBlogs(res.data.message)
     }).catch((e)=>{
        console.log(e);
     })
     } ,[])

    return(
    <div className="mt-5">
       <table className="table-auto w-full">
        <thead>
            <tr className="text-left h-10 text-sm">
            <th>Blog Title</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
            </thead>   
     {blogs.map((blog)=>
          <tbody>
              <tr className="border-y h-10">
              <td> {blog.title}</td>
           
              <td>    <Link to={"/post"} state={{
                    blog: blog._id
              }}> <CiEdit className="text-blue-800"   /> </Link></td>
              
              <td><MdOutlineDelete className="text-red-500" item={blog} onClick={()=> handleOnSubmit(blog)} /></td>
              </tr>
          </tbody>
   
      )}
        </table>
    </div>
    )
}

export default BlogList