import Header from "./Components/Header";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home"
import Blog from "./Pages/Blog";
import Dashboard from "./Pages/Dashboard";
import New from "./Pages/New"
import Profile from "./Pages/Profile"
import ChangePassword from "./Pages/ChangePassword";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState ,useEffect } from "react";
 import { UserContext } from "./Utils/UserContext";
import ProtectRoutes from "./ProtectRoutes";
 import EditBlog from "./Pages/EditBlog";


function App() {
  const [loading,setLoading] =useState(true)
  const [user,setUser]= useState(false)

  useEffect(()=>{
    if(localStorage.getItem("token") != null){
      setUser(true)
    }
    setLoading(false)
  },[])

  if(loading) return

  return (
   <div >
    <UserContext.Provider value={{user,setUser}}> 
      <BrowserRouter>
      <Header/>
      <div className="px-20  m-auto"> 
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/blog/:id" element={<Blog/>}/>


          <Route path="/dashboard" element={ <ProtectRoutes ><Dashboard/></ProtectRoutes>}/>
          <Route path="/new" element={<ProtectRoutes> <New/></ProtectRoutes>}/>
          <Route path="/post" element={<ProtectRoutes> <EditBlog/></ProtectRoutes>}/>
          <Route path="/profile" element={ <ProtectRoutes> <Profile/></ProtectRoutes>}/>
          <Route path="/change" element={<ProtectRoutes> <ChangePassword/></ProtectRoutes>}/>
        </Routes>
        </div>
      </BrowserRouter>
      </UserContext.Provider>

      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
   </div>
  );
}

export default App;
