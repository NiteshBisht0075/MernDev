import React,{useState} from 'react'
import {NavLink,useHistory} from 'react-router-dom'
const Login =  () =>{
  const history=useHistory()
   const [email,setEmail] =useState('');
   const [password,setPassword] =useState('');  
   const loginUser = async(e)=>{
     e.preventDefault();
     const res =await fetch('/sign-in',{
       method:"POST",
       headers:{
         "Content-Type":"application/json"
       },
       body:JSON.stringify({
          email,
          password
       })
     });
     const data = res.json();
     console.log(data)
     if(res.status ===400 || !data){
       window.alert("Invalid")
     }
     else{
       window.alert("login succcess")
       history.push("/about")
     }

   }
  return (
    <div>
        <div className="container px-4 py-5 mx-auto">
            <div className="card card0">
                <div className="d-flex flex-lg-row flex-column-reverse">
                    <div className="card card1">
                        <div className="row justify-content-center my-auto">
                            <div className="col-md-8 col-10 my-5">
                                <div className="row justify-content-center px-3 mb-3"> <img alt="img" id="logo" src="https://i.imgur.com/PSXxjNY.png"/> </div>
                                <h3 className="mb-5 text-center heading">We are Tidi</h3>
                                <h6 className="msg-info">Please login to your account</h6>
                                <form method="POST">
                                  <div className="form-group"> <label className="form-control-label text-muted">Username</label> <input type="text"  name="email" placeholder="Email id" className="form-control" autoComplete="off"
                                  value={email}
                                  onChange={(e)=>setEmail(e.target.value)}
                                  /> </div>
                                  <div className="form-group"> <label className="form-control-label text-muted">Password</label> <input type="password"  name="psw" placeholder="Password" className="form-control" autoComplete="off"
                                  value={password}
                                  onChange={(e)=>setPassword(e.target.value)}
                                  /> </div>
                                  <div className="row justify-content-center my-3 px-3"> <input type="submit" name="signin" className="btn-block btn-color" 
                                  value="Log In"
                                  onClick={loginUser}
                                  />
                                  </div>
                                </form>
                            </div>
                        </div>
                        <div className="bottom text-center mb-5">
                            <p href="" className="sm-text mx-auto mb-3">Don't have an account?</p>
                            <NavLink to="/signup">Sign up  </NavLink>
                        </div>
                    </div>
                    <div className="card card2">
                        <div className="my-auto mx-md-5 px-md-5 right">
                            <h3 className="text-white">We are more than just a company</h3> <small className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
export default Login;