import React, {useState}from 'react'
import {useNavigate} from 'react-router-dom';

const host = "https://enchanting-hen-cowboy-boots.cyclic.app"
function SignUp(props) {
  const [credentials, setCredentials] = useState({email:"", password:"", cpassword:"", name:""});
  let navigate = useNavigate();
  const handleSubmit = async(e)=>{
      e.preventDefault();
      const url=`${host}/api/auth/createuser`
      const response = await fetch(url, {
        method: "POST", 
    
        headers: {
          "Content-Type": "application/json",
          
    
        },
       body: JSON.stringify({email:credentials.email, password:credentials.password,name:credentials.name})
      
      });
      const json= await response.json()
      if (json.success){
        localStorage.setItem('token',json.authtoken);
        navigate("/")
        props.showAlert("Account created Successfully","success")
      }
      else{
        props.showAlert("Invalid Details","danger")
      }

  }
  const onChange= (e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value}) 
}
  return (
    <div className='container mt-3'>

    <h2>Create an Account for NotesZ </h2>
      <form onSubmit={handleSubmit}>
     
      <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name' value={credentials.name} onChange={onChange} />
   
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
   
  </div>

  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange}/>
  </div>
 
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name='cpassword' value={credentials.cpassword} onChange={onChange}/>
  </div>

  <button type="submit" className="btn btn-primary" >Create Account</button>
</form>

    </div>
  )
}

export default SignUp
