import React from 'react'
import styles from './Cards.module.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Cards = ({price, title, img, desc, id, displayNone}) => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/dashboard/product/${id}`)
    }

    const location = useLocation()
    const isHome = location.pathname === `/dashboard/product/${id}`
    console.log(isHome)
  return (
    <div className={styles.cardbox}>
      <div className={styles.cardImg}>
        <img src={img} alt="api-img" />
      </div>
      <div className={styles.cardContext}>
        <h4 title={title}>{title.slice(0, 40)}</h4>
        <h3 style={{color: 'red'}}>$:{price}</h3>
        <span title={desc}>{desc.slice(0, 50)}...</span>
        <button style={{
          display: isHome ? 'none': '',
        }} onClick={handleNavigate}>Add</button>
      </div>
    </div>
  )
}

export default Cards