import React from 'react'
import styles from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul>
        <li><NavLink to='/dashboard/home'>Home</NavLink></li>
        <li><NavLink to='/dashboard/product'>Products</NavLink></li>
        <li><NavLink>About us</NavLink></li>
        <li><NavLink>Contact us</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar;