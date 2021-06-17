import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
const Signup =  () =>{
  const history =useHistory()
  const [user,setUser] = useState({
    name:"",email:"",password:"",cpassword:""
  }); 
  let name,value; 
  const handleInput = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value});
  }
  const PostData=async(e)=>{
    e.preventDefault();
    const {name,email,password,cpassword} = user;
    const res = await fetch("/register",{
         method: "POST",
         headers: {
           "Content-Type" :"application/json"
         },
         body: JSON.stringify({
          name,email,password,cpassword
         })
    });
    const data = await res.json();
    if(data.status === 422 || !data){
      window.alert("invalid registration")
    }
    else{
      window.alert("registration successful")
      history.push("/login")
    }
  }
  return (
    <div>
      <div className="signup-form">
    
		<div className="form-header">
			<h2>Sign Up</h2>
			<p>Fill out this form to start your free trial!</p>
		</div>
    <form method="POST">
    <div className="form-group">
			<label>Username</label>
        	<input type="text" className="form-control" name="name" required="required" autoComplete="off"
          value={user.name}
          onChange={handleInput}
          />
    </div>
    <div className="form-group">
			<label>Email Address</label>
        	<input type="email" className="form-control" name="email" required="required" autoComplete="off"
          value={user.email}
          onChange={handleInput}
          />
    </div>
		<div className="form-group">
			<label>Password</label>
            <input type="password" className="form-control" name="password" required="required" 
            value={user.password}
            onChange={handleInput}
            />
    </div>
		<div className="form-group">
			<label>Confirm Password</label>
            <input type="password" className="form-control" name="cpassword" required="required"
            value={user.cpassword}
            onChange={handleInput}    
            />
    </div>        

		<div className="form-group">
      <input type="submit" className="btn btn-primary btn-block btn-lg" name="signup" required="required"
      value="register"
      onClick={PostData}
      />
		</div>	
    </form>
	<div className="text-center small">Already have an account? <a href="/login">Login here</a></div>
</div>
    </div>
  )
}
export default Signup