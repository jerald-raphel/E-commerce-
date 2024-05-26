import React,{useState} from 'react'
import "./css/loginsignup.css"
import Navbar from '../components/Navbar/navbar';

const Loginsignup = () => {

  const [state,setState]= useState("login");
  const [formData,setFromData]=useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler =(e)=>{
    setFromData({...formData,[e.target.name]:e.target.value})
  }

  const login = async()=>{
     console.log("login function executed",formData);
     let responseData;
    await fetch('http://localhost:5000/login',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((res)=>res.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }
   const singup = async()=>{
     console.log("signup function executed",formData);
    let responseData;
    await fetch('http://localhost:5000/signup',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((res)=>res.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
   }

  return (
    <div className='login-signup'>
      <div className='loginsignup-container'>
        <h1>{state}</h1>
        <div className='loginsignup-fields'>
          {state==="Sign up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name'/>:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email address'/>
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='password'/>
        </div>
        <button onClick={()=>{state==="login"?login():singup()}} className='btn'>CONTINUE</button>
        {state==="Sign up"
        ?<p className='loginsignup-login'>Already have an account? <span onClick={()=>{setState('login')}}>Login here</span></p>
        :<p className='loginsignup-login'>Create an account? <span onClick={()=>{setState('Sign up')}}>Click here</span></p>
        }

        <div className='loginsignup-agree'>
          <input type="checkbox" name="" id="" />
          <p>By continuing,i agree to the terms and policy.</p>
        </div>
      </div>

      
    </div>
  )
}

export default Loginsignup
