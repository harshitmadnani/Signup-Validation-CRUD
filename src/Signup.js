import React, { useState , useEffect} from 'react'
import "./Signup.css"
import Home from "./Home"

const App = () => {
  const initialValues = {username:"", email: "", password: ""}

  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState(initialValues)
  const [isSubmit,setIsSubmit] = useState(false)

  const handleChange= (e) =>{

    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value})
    console.log(formValues);
  }


  const handleSubmit = (e) =>{
    e.preventDefault();
   setFormErrors (validate(formValues))
   setIsSubmit(true) 

  }

  useEffect(() => {
    if(Object.keys(formErrors).length ===0 && isSubmit){
      console.log(formValues);
      
    }
  })


const validate = (values) =>{
  const errors ={}
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i ;

//validation usernam

  if(!values.username){
    errors.username = "Username is required"
  }

  //validation email

  if(!values.email){
    errors.email = "Email is required"
  }
  else if(!regex.test(values.email)){
    errors.email = "Not a valid email"
  }
  
  //validation password
  
  if(values.Password){
    errors.password= "Password is required"
  }
  else if(values.password.length < 7){
    errors.password = "Password must be more than 7 characters"
  }

  else if(values.password.length > 12){
    errors.password = "Password cannot be  more than 12 characters"
  }


  return errors;
}


  return (
    <>
     <Home/>
     <h2 style={{marginLeft:"40vw", color:"black"}}> Sign-Up </h2>
     {Object.keys(formErrors).length ===0 && isSubmit ? (<div className="message success" style={{color:"green", fontSize:"30px", marginLeft:"580px", border:"2px solid white", width:"300px", backgroundColor:"white", fontWeight:"600"}}>{}Signed in Successfully</div>) 
    
    :(
      <pre>  </pre>
    )

}


    <div className="container">
      <form onSubmit={handleSubmit}>
       
        <h2>Login Form </h2>
        <div className="ui form" >
         
          <div className="field"  >
          <h3>Username</h3>
          <input className="input-fields" type="text" name="username" placeholder="Username" value={formValues.username}  onChange ={handleChange}   ></input>  
          </div>
          <p>  {formErrors.username} </p>

          <div className="field">
          <h3>Email</h3>
          <input className="input-fields"  type="email" name="email" placeholder="Email" value={formValues.email}  onChange ={handleChange}   ></input>  
          </div>
          <p>  {formErrors.email} </p>


          <div className="field">
          <h3>Password</h3>
          <input className="input-fields"  type="password" name="password" placeholder="Password" value={formValues.password}  onChange ={handleChange}   ></input>  
          </div>
          <p>  {formErrors.password} </p>
          <button >Submit </button>


        </div>
      </form>
    </div>
    
    
    </>
  )
}

export default App
