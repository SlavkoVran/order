import React, { useEffect, useContext, useState } from 'react'
import { CartContext } from '../../store/contexts/CartProvider'
import styles from './_step1Card.module.scss'


const Step1Card = ({ bowl }) => {
    const { addBowl, bowlCart } = useContext(CartContext)

    const handleAdd = (item,) => {
        addBowl(item)
    }

    return (
        <div className={ `${styles.cardContainer} ${bowlCart?.id == bowl.id ? styles.active : '' }`} onClick={() => handleAdd(bowl)}> 
            <img className={ bowlCart?.id == bowl.id ? styles.activeImg : styles.noImg} src="./storage/active.png" alt="bowl" />
            <img className={styles.img} src={bowl.imagePath} alt="bowl" />
            <h2>{bowl.name}</h2>
            <p className='description'>{bowl.description}</p>
        </div>
    )
}

export default Step1Card