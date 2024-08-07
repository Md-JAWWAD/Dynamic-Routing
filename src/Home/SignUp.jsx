import React, { useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

  const navigate = useNavigate()

  let [registration, setRegistration] = useState({
    name: '',
    username: '',
    password: '',
  })


  const handleSubmit = (e) => {
    e.preventDefault();

    if(registration.name.trim() === '' || registration.username.trim() === '' || registration.password.trim() === ''){
      alert('All fields must be filled out.')
    }
    else{
      
      localStorage.setItem('SignUp', JSON.stringify(registration))
      console.log(registration)
      alert('SuccessFully Register.')
      navigate('/')
    }
    setRegistration({
      name: '',
      username: '',
      password: '',
    })
  }



  return (
    <div className='sign-up'>
      <div className='signUp-box'>
            <form action="#" className='signUp-form'>
            <h1 style={{color:'white'}}>Sign Up</h1>
                <input value={registration.name} type="text" required placeholder='Enter your name' onChange={(e)=> setRegistration({...registration, name:e.target.value})}/>
                <input value={registration.username} type="text" required placeholder='Enter username' onChange={(e)=> setRegistration({...registration, username:e.target.value})}/>
                <input value={registration.password} type="password" required placeholder='Create password' onChange={(e)=> setRegistration({...registration, password:e.target.value})}/>
                <button onClick={handleSubmit}>Sign Up</button>
                <span>Already have account? <Link to='/'>Login</Link></span>
            </form>
        </div>
    </div>
  )
}

export default SignUp