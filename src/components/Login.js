import React, {useState}from 'react'
import {useNavigate} from 'react-router-dom';

const host = "http://localhost:5000"
function Login(props) {
    const [credentials, setCredentials] = useState({email:"", password:""});
   let navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const url=`${host}/api/auth/login`
        const response = await fetch(url, {
          method: "POST", 
      
          headers: {
            "Content-Type": "application/json",
            
      
          },
         body: JSON.stringify({email:credentials.email, password:credentials.password})
        
        });
        const json= await response.json()
        if (json.success){
          localStorage.setItem('token',json.authtoken);
          navigate("/")
          props.showAlert("Login Successful","success")
        }
        else{
          props.showAlert("Invalid Credentials","danger")
        }

    }
    const onChange= (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value}) 
    }
  return (
    <>
<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" value={credentials.email}id="email" name= "email" aria-describedby="emailHelp"  onChange={onChange}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" value={credentials.password}id="password"  name= "password"   onChange={onChange}/>
  </div>

  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </>
  )
}

export default Login