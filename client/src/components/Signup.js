import React,{useState} from 'react'
import { confirmPassword, validEmail,validName,validPassword} from '../regex/Regex';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const history =useHistory()
  const [user, setUser] = useState({
    name:"",email:"",password:"",cpassword:""
  });
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [cpwdError, setCpwdError] = useState(false);

  let name,value;
  const handleInput = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value});
  }
  const validate = () => {
    if(!validName.test(user.name)){
      setNameErr(true);
    }
    else{
      setNameErr(false);
    }
    if (!validEmail.test(user.email)) {
       setEmailErr(true);
    }
    else{
      setEmailErr(false);
    }
    if (!validPassword.test(user.password)) {
       setPwdError(true);
    }
    else{
      setPwdError(false)
    }
    if(confirmPassword.test(user.cpassword)){
      setCpwdError(true)
    }
    else{
      setCpwdError(false)
    }
 };

  const PostData = async(e) =>{
    e.preventDefault(); 
    // user.name
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
      window.alert("Registration Success")
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
       {nameErr && <p>Write valid name</p>}
    </div>
    <div className="form-group">
			<label>Email Address</label>
        	<input type="email" className="form-control" name="email" required="required" autoComplete="off"
          value={user.email}
          onChange={handleInput}
          />
      {emailErr && <p>Your email is invalid</p>}

    </div>
		<div className="form-group">
			<label>Password</label>
            <input type="password" className="form-control" name="password" required="required" 
            value={user.password}
            onChange={handleInput}
            />
      {pwdError && <p>Password could be more secure</p>}
    </div>
		<div className="form-group">
			<label>Confirm Password</label>
            <input type="password" className="form-control" name="cpassword" required="required"
            value={user.cpassword}
            onChange={handleInput}    
            />
       {cpwdError && <p>confirm password should be match</p>}     
    </div>        

		<div className="form-group">
      <input type="submit" className="btn btn-primary btn-block btn-lg" name="signup" required="required"
      value="register"
      onClick={validate}
      />
		</div>	
    </form>
	<div className="text-center small">Already have an account? <a href="/login">Login here</a></div>
</div>
    </div>
  )
}
export default Signup