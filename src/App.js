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
 

function App() {
  return (
   <div >
      <BrowserRouter>
      <Header/>
      <div className="px-20  m-auto">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/new" element={<New/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/change" element={<ChangePassword/>}/>
        </Routes>
        </div>
      </BrowserRouter>
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
