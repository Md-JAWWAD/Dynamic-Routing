import React, { useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const [checkForm, setCheckForm] = useState({
    username: '',
    password: '',
  })

  const handleCheck = (e) => {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem('SignUp'));

    if(user == null){
      alert('First create account')
    }
    else if(checkForm.username === user.username && checkForm.password === user.password){
      alert('Login Successful')
      navigate('/dashboard', {replace: true})
    }
    else{
      alert('Invalid Credentials')
    }
        
  }

  return (
    <div className="login">
        <div className='Login-box'>
            <form action="" className='login-form'>
            <h1>Login</h1>
                <input  onChange={(e)=> setCheckForm({...checkForm, username:e.target.value})}  type="text" required placeholder='Enter username' />
                <input  onChange={(e)=> setCheckForm({...checkForm, password:e.target.value})}  type="password" required placeholder='Enter password' />
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: 14}}>
                    <span><input type="checkbox" name="" id="" /> Remember me</span>
                    <span><a href="#">Forgot password?</a></span>
                </div>
                <button onClick={handleCheck}>Login</button>
                <span>Don't have account? <Link to='/signUp'>Register</Link></span>
            </form>
        </div>
    </div>
  )
}

export default Login