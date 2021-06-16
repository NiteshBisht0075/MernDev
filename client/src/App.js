import React from 'react'
import "../src/App.css"
import "bootstrap/dist/css/bootstrap.css"
import {Route ,Switch} from "react-router-dom";    
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Signup from "./components/Signup"
import Login from "./components/Login"
// import Logout from "./components/Logout"
const App =  () =>{
  return (
    <>
      <Navbar/>
      <Switch>
      <Route exact path="/">
         <Home/>
      </Route>
      <Route path="/about">
         <About/>
      </Route >
      <Route path="/contact">
         <Contact/>
      </Route>    
      <Route path="/signup">
         <Signup/>
      </Route>   
      <Route path="/login">
         <Login/>
      </Route>  
      {/* <Route path="/logout">
         <Logout/>
      </Route>   */}
      </Switch>
 
  
    </>
  )
}
export default App