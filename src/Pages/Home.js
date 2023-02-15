import BlogCard from "../Components/BlogCard"
import SideBar from "../Components/SideBar"
import ListCard from "../Components/ListCard"

import { useEffect,useState } from "react"

function Home(){
    const {blogs,setBlogs}= useState([])
    useEffect(()=>{
        //fetching
        fetch(`http://localhost:8000/blog/list`)
        .then((res)=>{return res.json})
        .then((data)=>{ console.log(data);})
        .catch(()=>{ console.log("error");})

    })
    return (
        <div className="flex justify-between space-x-5 mt-5">
           <SideBar/>
            <div className="flex-1">
                <BlogCard/>
                <BlogCard/>
            </div>
            <div className="basis-1/4">
                <div className="bg-slate-50 py-2 rounded-md">
                    <div className="flex justify-between items-center px-5 py-2">
                        <h3 className="font-bold">Listings</h3>
                        <small className="text-blue-700 font-semibold">See all</small>
                    </div>
                    <ListCard/>
                    <ListCard/>
                    <ListCard/>
                    <ListCard/>
                </div>
            </div>
        </div>
    )
}

export default Home


