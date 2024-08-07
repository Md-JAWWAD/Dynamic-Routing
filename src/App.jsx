import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Home/Login';
import SignUp from './Home/SignUp';
import Dashboard from './Home/Dashboard';
import Home from './Home/Home';
import ProductDetail from './Home/productDetail';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />}>
        <Route path='home' element={<Home />}/>
        <Route path='product/:id' element={<ProductDetail />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App