import React from 'react'
import Todoapp from "./components/Todoapp";
import Home from "./components/Home"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Product from "./components/Product"
import {BrowserRouter as Router,Routes,Route ,Link} from "react-router-dom"
import Produatlist from "./components/Produatlist"
import Productdetails from "./components/Productdetails"
const App = () => {
  let user = "Yogesh"
  return (
    <div className="app"> 
      <Router>


        <ul>
         <li> <Link to={"/"}>Home</Link>  </li>
         <li> <Link to={`/Login/${user}`}>Login</Link>  </li>
         <li> <Link to={"/SingUp"}>SingUp</Link>  </li>
         <li> <Link to={"/TOdoapp"}>Todoapp</Link>  </li>
         <li> <Link to={"/Product"}>Product</Link>  </li>


        </ul>
          <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/Product" element={<Product/>}> 
           <Route index element = {<Produatlist/>}/>
           <Route path="list" element = {<Produatlist/>} />
           <Route path="details" element = {<Productdetails/>} />
           </Route>
           <Route path="/Login/:newuser" element={<Login/>}/>
           <Route path="/SingUp" element={<SignUp/>}/>
           <Route path="/Todoapp" element={<Todoapp/>}/>


          </Routes>


      </Router>

        
      
    </div>
  )
}

export default App
